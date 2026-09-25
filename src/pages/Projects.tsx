import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import BlogHero from "@components/blog/BlogHero";
import PostList from "@components/blog/PostList";
import PaginationControl from "@components/blog/PaginationControl";
import { fetchPostCollection, type PostSummary } from "@/services/notionApi";


const Projects = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
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
    setError(null);

    const loadProjects = async () => {
      try {
        const data = await fetchPostCollection("projects", {
          query: searchQuery,
          cursor: currentCursor,
          signal: controller.signal
        });

        setPosts(data.results);
        setHasMore(data.hasMore);

        if (data.hasMore && data.nextCursor) {
          cursorsRef.current[page] = data.nextCursor;
        }
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }

        setError(fetchError instanceof Error ? fetchError.message : "Unable to load projects");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
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
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      mt: { xs: 4, md: 4 },
      mb: { xs: 8, md: 12 }
    }}>
      <BlogHero onSearch={handleSearch} />
      <PostList
        posts={posts}
        loading={loading}
        error={error}
        hrefPrefix="/projects"
        onRetry={() => setRetryKey((key) => key + 1)}
      />
      <PaginationControl
        page={page}
        hasMore={hasMore}
        loading={loading}
        onPrev={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
        onNext={() => hasMore && setPage((currentPage) => currentPage + 1)}
      />
    </Container>
  );
};

export default Projects;