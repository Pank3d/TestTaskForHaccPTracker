import { useRoutes } from "react-router-dom";
import { routes } from "@app/config";
import { ModalOverlay } from "@features/ModalOverlay";
import "./App.css";

export const App = () => {
  const element = useRoutes(routes);
  return (
    <>
      {element}
      <ModalOverlay />
    </>
  );
};
