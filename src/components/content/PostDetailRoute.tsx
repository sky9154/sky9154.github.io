import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import PostLayout from "@components/content/PostLayout";
import PostSkeleton from "@components/content/PostSkeleton";


const PostDetail = lazy(() => import("@pages/PostDetail"));

function PostDetailRoute() {
  const { pathname } = useLocation();
  const collection = pathname.startsWith("/projects/") ? "projects" : "articles";

  return (
    <Suspense fallback={(
      <PostLayout>
        <PostSkeleton collection={collection} />
      </PostLayout>
    )}>
      <PostDetail />
    </Suspense>
  );
}

export default PostDetailRoute;
