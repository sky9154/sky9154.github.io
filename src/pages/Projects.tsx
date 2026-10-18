import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";

import CollectionHero from "@components/content/CollectionHero";
import PostList from "@components/content/PostList";
import PaginationControl from "@components/content/PaginationControl";
import { fetchPostCollection, type PostSummary } from "@services/notionApi";


function Projects() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [retryKey, setRetryKey] = useState(0);
  const cursorsRef = useRef<(string | null)[]>([null]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery((previousQuery) => {
      if (previousQuery === query) {
        return previousQuery;
      }

      setPage(1);

      cursorsRef.current = [null];

      return query;
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const currentCursor = cursorsRef.current[page - 1] || null;
    setLoading(true);

    const loadProjects = async () => {
      try {
        const data = await fetchPostCollection("projects", {
          query: searchQuery,
          cursor: currentCursor,
          signal: controller.signal
        });

        setPosts(data.results);
        setError(null);
        setHasMore(data.hasMore);

        if (data.hasMore && data.nextCursor) {
          cursorsRef.current[page] = data.nextCursor;
        }
      } catch (fetchError) {
        if ((fetchError instanceof DOMException) && (fetchError.name === "AbortError")) {
          return;
        }

        setError((fetchError instanceof Error) ? fetchError.message : "Unable to load projects");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
          setHasLoaded(true);
        }
      }
    };

    void loadProjects();
    return () => controller.abort();
  }, [page, retryKey, searchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page, searchQuery]);

  return (
    <Container maxWidth="lg" className="collection-page" sx={{
      flexGrow: 1,
      mb: { xs: 8, md: 12 }
    }}>
      <CollectionHero loading={loading} collection="projects" onSearch={handleSearch} />
      <PostList
        posts={posts}
        loading={loading}
        initialLoading={loading && !hasLoaded}
        error={error}
        collection="projects"
        onRetry={() => setRetryKey((key) => key + 1)}
      />
      <PaginationControl
        collection="projects"
        page={page}
        hasMore={hasMore}
        loading={loading}
        onPrev={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
        onNext={() => hasMore && setPage((currentPage) => currentPage + 1)}
      />
    </Container>
  );
}

export default Projects;
