"use client";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { brand } from "@/theme/brand.config";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";

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
  const router = useRouter();
  const { t } = useTranslation();

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
            </Text>{" "}
            -{" "}
            <Text className="hover" size="2" onClick={() => router.push("/en/review/")}>
              Leave a review
            </Text>
          </Box>
          {/* CTA */}
          <LanguageSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
