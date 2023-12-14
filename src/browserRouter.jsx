import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "./routes/_homepage";
import SuccessPage from "./routes/_success";
import Root from "./routes/_index";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Homepage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Route>
  )
);
