"use client";
import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Flex, Badge } from "@radix-ui/themes";
import { siteRoutes } from "@/routes/siteRoutes";
import { Nav } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/theme/brand.config";
import i18n from "@/utils/i18n/i18n";

/**
 * Navbar component that renders the main navigation bar for the application.
 *
 * The Navbar includes:
 * - A logo section that links to the home page.
 * - A navigation menu.
 * - A call-to-action (CTA) button.
 *
 * The layout is responsive, adjusting grid columns and alignment for different screen sizes.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */

const Navbar: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  const handleLanguageChange = (lang: "en" | "est") => {
    return i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleChange = (lng: string) => setActiveLanguage(lng);

    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  return (
    <Box className="navigation">
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Grid align="center" columns={{ initial: "3", lg: "6" }} gap="4">
          <Flex gridColumn={{ initial: "1 / 2", lg: "1 / 2" }} gridRow="1">
            <Link href={siteRoutes.home.path} title={brand.company.logo.alt}>
              <Image
                src={brand.company.logo.src}
                alt={brand.company.logo.alt}
                width={brand.company.logo.width}
                height={brand.company.logo.height}
              />
            </Link>
          </Flex>

          <Flex
            justify={{ initial: "end", lg: "center" }}
            gridColumn={{ initial: "2 / 4", lg: "2 / 6" }}
            gridRow="1"
          >
            <Nav />
          </Flex>

          <Flex
            justify={{ initial: "center", lg: "end" }}
            gridColumn={{ initial: "2 / 3", lg: "6 / 7" }}
            gridRow="1"
            gap="2"
            display={{ initial: "none", lg: "flex" }}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
