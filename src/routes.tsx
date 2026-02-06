import { RouteObject, Navigate } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Blog from "@pages/Blog";
import BlogPost from "@pages/BlogPost";
import NotFound from "@pages/NotFound";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Navigate to="/" replace />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "blog/:id",
        element: <BlogPost />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;