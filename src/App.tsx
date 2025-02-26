import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import { BaseLayout } from "./layouts";
import { HomePage } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BaseLayout />}>
      <Route path="*" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
