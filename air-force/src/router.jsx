import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Aircraft from "./pages/Aircraft";
import Tech from "./pages/Tech";
import History from "./pages/History";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/aircraft/*", element: <Aircraft /> },
  { path: "/tech/*", element: <Tech /> },
  { path: "/history/*", element: <History /> },
  { path: "/about/*", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);
