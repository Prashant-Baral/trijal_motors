import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import CheryWanda from "./pages/CheryWanda";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import Blog, { BlogPost } from "./pages/Blog";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "vehicles/chery-wanda", Component: CheryWanda },
      { path: "gallery", Component: Gallery },
      { path: "financing", Component: Financing },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);
