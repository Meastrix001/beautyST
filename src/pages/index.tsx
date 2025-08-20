import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
import { useEffect } from "react";
import i18n from "@/utils/i18n/i18n";
import { NavigationMobile } from "./navigation/Navigation.mobile";
import { Box } from "@radix-ui/themes";

export const RouteWrapper = () => {
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("beautyst_lang_last") || "est");
  }, []);

  return (
    <main>
      <Box height="15vh">
        <Navigation />
        <NavigationMobile />
      </Box>
      <Box height="90vh">
        <Outlet />
      </Box>
    </main>
  );
};
