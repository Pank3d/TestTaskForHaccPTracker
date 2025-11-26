import { useRoutes } from "react-router-dom";
import { routes } from "@app/config";
import "./App.css";

export const App = () => {
  const element = useRoutes(routes);
  return element;
};
