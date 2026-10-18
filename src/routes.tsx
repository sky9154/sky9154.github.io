import { lazy } from "react";
import { type RouteObject, Navigate } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import PostDetailRoute from "@components/content/PostDetailRoute";
import LegacyArticleRedirect from "@components/articles/LegacyArticleRedirect";
import NotFound from "@pages/NotFound";


const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Projects = lazy(() => import("@pages/Projects"));
const Articles = lazy(() => import("@pages/Articles"));

const routes: RouteObject[] = [{
  path: "/",
  element: <MainLayout />,
  children: [{
    index: true,
    element: <Home />
  }, {
    path: "home",
    element: <Navigate to="/" replace />
  }, {
    path: "about",
    element: <About />
  }, {
    path: "projects",
    element: <Projects />
  }, {
    path: "projects/:id",
    element: <PostDetailRoute />
  }, {
    path: "articles",
    element: <Articles />
  }, {
    path: "articles/:id",
    element: <PostDetailRoute />
  }, {
    path: "blog",
    element: <LegacyArticleRedirect />
  }, {
    path: "blog/:id",
    element: <LegacyArticleRedirect />
  }]
}, {
  path: "*",
  element: <NotFound />
}];

export default routes;
