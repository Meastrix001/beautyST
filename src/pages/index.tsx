import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
import { useEffect } from "react";
import i18n from "@/utils/i18n/i18n";
export const RouteWrapper = () => {
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("beautyst_lang_last"));
  }, []);

  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};
