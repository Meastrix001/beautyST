"use client";
import React, { useEffect, useState } from "react";
import { Badge, Box, Button, Flex } from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavLinks } from "@/components";
import useViewportWidth from "@/hooks/useViewportWidth";
import i18n from "@/utils/i18n/i18n";
// import { i18n } from "next-i18next";

/**
 * Navigation component that renders a responsive navigation bar.
 *
 * - On mobile devices (viewport width <= 768px), displays a hamburger menu button.
 *   When clicked, it opens a full-screen overlay with navigation links and a close button.
 * - On desktop devices, displays navigation links inline.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation component.
 */

const Nav: React.FC = () => {
  const isMobile = useViewportWidth(768);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);
  useEffect(() => {
    const handleChange = (lng: string) => setActiveLanguage(lng);

    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  const handleLanguageChange = (lang: "en" | "est") => {
    return i18n.changeLanguage(lang);
  };
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <>
          <Flex justify="between" align="center">
            <Button variant="soft" onClick={toggleNav}>
              <HamburgerMenuIcon />
            </Button>
          </Flex>

          {isOpen && (
            <Box
              position="fixed"
              inset="0"
              style={{ backgroundColor: "rgb(247, 177, 176)", zIndex: 1000 }}
            >
              <Flex direction="column" p="4" gap="5" height="100%">
                <Flex justify="end">
                  <Button variant="soft" onClick={toggleNav}>
                    <Cross1Icon />
                  </Button>
                </Flex>

                <Flex
                  direction="column"
                  gap="6"
                  align="center"
                  py="8"
                  height="100%"
                  justify="between"
                >
                  <Flex
                    direction="column"
                    gap="6"
                    align="center"
                    py="8"
                    height="100%"
                  >
                    <NavLinks onClick={toggleNav} />
                  </Flex>

                  <Flex
                    justify={{ initial: "center", lg: "end" }}
                    gridColumn={{ initial: "2 / 3", lg: "6 / 7" }}
                    gridRow="1"
                    gap="2"
                  >
                    <Badge
                      className="hover"
                      size="3"
                      variant={activeLanguage === "en" ? "solid" : "soft"}
                      color={activeLanguage === "en" ? "pink" : "gold"}
                      onClick={() => handleLanguageChange("en")}
                    >
                      English
                    </Badge>
                    <Badge
                      className="hover"
                      size="3"
                      variant={activeLanguage === "est" ? "solid" : "soft"}
                      color={activeLanguage === "est" ? "pink" : "gold"}
                      onClick={() => handleLanguageChange("est")}
                    >
                      Eesti
                    </Badge>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          )}
        </>
      )}

      {!isMobile && (
        <Flex justify="end" align="center" gap="6">
          <NavLinks />
        </Flex>
      )}
    </>
  );
};

export default Nav;
