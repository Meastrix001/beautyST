import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const PartnerSection: React.FC<PageLang> = ({ lang }) => {
  return (
    <Grid columns={{ initial: "1", lg: "6" }} gap="7" align="center">
      <Box gridColumn={{ initial: "1 / -1", lg: "1 / 3" }}>
        <Heading
          as="h2"
          size="4"
          weight="medium"
          align={{ initial: "center", lg: "left" }}
        >
          {LanguageKeys[lang].landing.partner.desc}
        </Heading>
      </Box>
      <Flex
        align="center"
        justify={{ initial: "center", lg: "end" }}
        gridColumn={{ initial: "1 / -1", lg: "3 / 7" }}
      >
        <Image
          src="/static/logos/Lycon_svg.svg"
          alt="lyconLogo"
          height="50"
          width="200"
        />
      </Flex>
    </Grid>
  );
};

export default PartnerSection;
