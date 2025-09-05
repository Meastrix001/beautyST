"use client";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { brand } from "@/theme/brand.config";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";

const Footer: React.FC = () => {
  const router = useRouter();
  const [lang, setLang] = useState<string>("est")

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
              {/* @ts-expect-error expected */}
              {LanguageKeys[lang].footer.arr}
            </Text>{" "}
            -{" "}
            <Text className="hover" size="2" onClick={() => router.push(`/${lang}/review/`)}>
              Leave a review
            </Text>
          </Box>
          {/* CTA */}
          <LanguageSwitcher setLang={setLang} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
