import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CurrentData from "../pages/CurrentData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/currentData",
    element: <CurrentData />,
  }
]);

export default router;
