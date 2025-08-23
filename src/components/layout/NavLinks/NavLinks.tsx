"use client";
import React from "react";
import { Text } from "@radix-ui/themes";
import { siteRoutes } from "@/routes/siteRoutes";
import { Route } from "@/models/Routes";
import { NavLinksProps } from "./NavLinks.types";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

/**
 * Renders a list of navigation links based on the `siteRoutes.nav` object.
 *
 * @param {NavLinksProps} props - The props for the NavLinks component.
 * @param {() => void} [props.onClick] - Optional click handler for each navigation link.
 * @returns {JSX.Element} A fragment containing navigation links.
 */

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <>
      {Object.values(siteRoutes.nav).map((route: Route, index) => {
        console.log(route.path, pathname);

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
                  pathname.replaceAll("/", "") ===
                  route.path.replaceAll("/", "")
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
