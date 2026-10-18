import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import PostLayout from "@components/content/PostLayout";
import PostSkeleton from "@components/content/PostSkeleton";
import PostError from "@components/content/PostError";
import PostHeader from "@components/content/PostHeader";
import PostContent from "@components/content/PostContent";
import { fetchPostDetail, type PostDetail as PostDetailData } from "@services/notionApi";


function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const collection = (location.pathname.startsWith("/projects/")) ? "projects" : "articles";
  const backPath = (collection === "projects") ? "/projects" : "/articles";

  const [postData, setPostData] = useState<PostDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPost = async () => {
      if (!id) {
        setLoading(false);
        setError("Missing post id");

        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchPostDetail(id, controller.signal, collection);

        setPostData(data);
      } catch (fetchError) {
        if ((fetchError instanceof DOMException) && (fetchError.name === "AbortError")) {
          return;
        }

        setPostData(null);
        setError((fetchError instanceof Error) ? fetchError.message : "Unable to load post");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    window.scrollTo({ top: 0, behavior: "auto" });
    void fetchPost();

    return () => controller.abort();
  }, [collection, id, retryKey]);

  return (
    <PostLayout collection={collection} backPath={backPath} showBack={loading || !!postData && !error}>
      {(loading) ? (
        <PostSkeleton collection={collection} />
      ) : (!postData || error) ? (
        <PostError collection={collection} backPath={backPath} onRetry={() => setRetryKey((key) => key + 1)} />
      ) : (
        <>
          <PostHeader collection={collection} metadata={postData.metadata} />
          <PostContent markdown={postData.markdown} />
        </>
      )}
    </PostLayout>
  );
}

export default PostDetail;
