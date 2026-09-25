import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import BlogPostRoute from "@components/blog/BlogPostRoute";
import NotFound from "@pages/NotFound";


const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Projects = lazy(() => import("@pages/Projects"));
const Blog = lazy(() => import("@pages/Blog"));

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
    element: <BlogPostRoute />
  }, {
    path: "blog",
    element: <Blog />
  }, {
    path: "blog/:id",
    element: <BlogPostRoute />
  }],
}, {
  path: "*",
  element: <NotFound />,
}];

export default routes;