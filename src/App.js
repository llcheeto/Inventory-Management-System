import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/error-page";
import Arcade from "./components/Arcade/Arcade";
import Inventory from "./components/Inventory/Inventory";
import NewInventory from "./components/NewInventory/NewInventory";
import TimeSheet from "./components/TimeSheet/TimeSheet";
import POS from "./components/POS/POS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Arcade",
    element: <Arcade />,
  },
  {
    path: "/Inventory",
    element: <Inventory />,
  },
  {
    path: "/NewInventory",
    element: <NewInventory />,
  },
  {
    path: "/TimeSheet",
    element: <TimeSheet />,
  },
  {
    path: "/POS",
    element: <POS />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
