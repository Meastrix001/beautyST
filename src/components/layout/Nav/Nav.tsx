"use client";
import React, { useState } from "react";
import { Box, Button, Flex } from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NavLinks } from "@/components";
import useViewportWidth from "@/hooks/useViewportWidth";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";
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

                  <LanguageSwitcher />
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
