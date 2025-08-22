"use client";
import { Badge, Box, Container, Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { brand } from "@/theme/brand.config";
import i18n from "@/utils/i18n/i18n";
import { useTranslation } from "react-i18next";

/**
 * Footer component that displays the site copyright and social media links.
 *
 * @remarks
 * - Uses responsive layout with different paddings and flex directions for initial and large (`lg`) breakpoints.
 * - Displays the current year and a customizable company name.
 * - Renders a list of social media links provided by the `socialLinks` array.
 *
 * @returns The footer section of the page.
 */

const Footer: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  const { t } = useTranslation();
  const handleLanguageChange = (lang: "en" | "est") => {
    localStorage.setItem("beautyst_lang_last", lang);
    return i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (localStorage.getItem("beautyst_lang_last")) {
      setActiveLanguage(localStorage.getItem("beautyst_lang_last") as string);
    }

    const handleChange = (lng: string) => setActiveLanguage(lng);

    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  return (
    <Box className="footer" py="4">
      <Container py={{ initial: "6", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex
          direction={{ initial: "column", lg: "row" }}
          align={{ initial: "center", lg: "center" }}
          justify={{ initial: "center", lg: "between" }}
          gap="4"
        >
          {/* Copyright */}
          <Box>
            <Text size="2" color="gray">
              &copy; {new Date().getFullYear()} {brand.company.name}.{" "}
              {t("footer.arr")}
            </Text>
          </Box>

          {/* CTA */}
          <Flex justify={{ initial: "center", lg: "end" }} gap="2">
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
      </Container>
    </Box>
  );
};

export default Footer;
