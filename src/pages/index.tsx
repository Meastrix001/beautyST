import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
export const RouteWrapper = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};
