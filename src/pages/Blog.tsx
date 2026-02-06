import { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "@mui/material";
import BlogHero from "@components/blog/BlogHero";
import PostList, { BlogPost } from "@components/blog/PostList";
import PaginationControl from "@components/blog/PaginationControl";


type NotionText = { plain_text: string };

interface NotionQueryResponse {
  results: {
    id: string;
    properties: {
      Title: { title: NotionText[] };
      Summary: { rich_text: NotionText[] };
      Tags: { multi_select: { name: string; color: string }[] };
      Updated: { last_edited_time: string };
    };
  }[];

  next_cursor: string | null;
  has_more: boolean;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const fetchPosts = useCallback(async () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    setLoading(true);
    setError(null);

    try {
      const baseUrl = "https://notion.sky9154.com/blog";
      const url = new URL(baseUrl);

      const currentCursor = cursorsRef.current[page - 1] || null;

      if (currentCursor) {
        url.searchParams.append("cursor", currentCursor);
      }

      if (searchQuery) {
        url.searchParams.append("q", searchQuery);
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fetch failed");
      }

      const data: NotionQueryResponse = await response.json();
      const formattedData: BlogPost[] = data.results.map((page) => ({
        id: page.id,
        title: page.properties.Title.title.map((t) => t.plain_text).join(""),
        summary: page.properties.Summary.rich_text.map((t) => t.plain_text).join(""),
        tags: page.properties.Tags.multi_select.map((tag) => ({
          name: tag.name,
          color: tag.color
        })),
        updatedAt: new Date(page.properties.Updated.last_edited_time).toLocaleDateString()
      }));

      setPosts(formattedData);
      setHasMore(data.has_more);

      if (data.has_more && data.next_cursor) {
        cursorsRef.current[page] = data.next_cursor;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
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

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      my: 4,
      minHeight: "100dvh"
    }}>
      <BlogHero onSearch={handleSearch} />
      <PostList posts={posts} loading={loading} error={error} />
      <PaginationControl
        page={page}
        hasMore={hasMore}
        loading={loading}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Container>
  );
};

export default Blog;