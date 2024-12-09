import Home from "../home";
import { Shop } from "../components/shop";
import ErrorPage from "../components/errorPage"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;