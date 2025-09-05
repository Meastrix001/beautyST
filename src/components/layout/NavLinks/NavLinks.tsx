"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@radix-ui/themes";
import { Route } from "@/models/Routes";
import { NavLinksProps } from "./NavLinks.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteRoutesEn } from "@/routes/siteRoutes.en";
import { siteRoutesEst } from "@/routes/siteRoutes.est";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { getNestedValue } from "@/utils/getNestedValues";


const NavLinks: React.FC<NavLinksProps & PageLang> = ({ onClick, lang }) => {
  const [activeSiteRoutes, setActiveSiteRoutes] = useState(siteRoutesEst)
  const pathname = usePathname();



  useEffect(() => {
    if (lang === "en") {
      setActiveSiteRoutes(siteRoutesEn)
    }
    if (lang === "est") {
      setActiveSiteRoutes(siteRoutesEst)
    }
  }, [lang])



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

              {getNestedValue(LanguageKeys[lang], route.label) || ""}

            </Text>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
