import { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "@mui/material";
import BlogHero from "@components/blog/BlogHero";
import PostList from "@components/blog/PostList";
import PaginationControl from "@components/blog/PaginationControl";
import { fetchPostCollection, type PostSummary } from "@/services/notionApi";


const Blog = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  const cursorsRef = useRef<(string | null)[]>([null]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery((prev) => {
      if (prev === query) {
        return prev;
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

    const loadPosts = async () => {
      try {
        const data = await fetchPostCollection("blog", {
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

        setError(fetchError instanceof Error ? fetchError.message : "Unable to load posts");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadPosts();

    return () => controller.abort();
  }, [page, retryKey, searchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page, searchQuery]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  };

  const handleNext = () => {
    if (hasMore) {
      setPage((p) => p + 1);
    }
  };

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
        onRetry={() => setRetryKey((key) => key + 1)} />
      <PaginationControl
        page={page}
        hasMore={hasMore}
        loading={loading}
        onPrev={handlePrev}
        onNext={handleNext} />
    </Container>
  );
};

export default Blog;