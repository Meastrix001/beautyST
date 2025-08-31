"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@radix-ui/themes";
import { Route } from "@/models/Routes";
import { NavLinksProps } from "./NavLinks.types";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import i18n from "@/utils/i18n/i18n";
import { siteRoutesEn } from "@/routes/siteRoutes.en";
import { siteRoutesEst } from "@/routes/siteRoutes.est";

/**
 * Renders a list of navigation links based on the `siteRoutes.nav` object.
 *
 * @param {NavLinksProps} props - The props for the NavLinks component.
 * @param {() => void} [props.onClick] - Optional click handler for each navigation link.
 * @returns {JSX.Element} A fragment containing navigation links.
 */

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const [activeSiteRoutes, setActiveSiteRoutes] = useState(siteRoutesEst)
  const pathname = usePathname();
  const i18nLang = i18n.language



  useEffect(() => {
    if (i18nLang === "en") {
      setActiveSiteRoutes(siteRoutesEn)
    }
    if (i18nLang === "est") {
      setActiveSiteRoutes(siteRoutesEst)
    }
  }, [i18nLang])

  return (
    <>
      {Object.values(activeSiteRoutes.nav).map((route: Route, index) => {
        return (
          <Link
            key={index}
            href={route.path}
            title={route.label}
            onClick={onClick}
          >
            <Text
              style={{
                color: "black",
                borderBottom:
                  pathname.replaceAll("/", "").replaceAll("/est/", "").replaceAll("/en/", "") ===
                    route.path.replaceAll("/", "").replaceAll("/est/", "").replaceAll("/en/", "")
                    ? "2px solid #eedec5"
                    : "",
              }}
              size="5"
            >
              {t(route.label)}
            </Text>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
