"use client";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * PartnerSection component displays a section highlighting partnerships with over 50 companies in Europe.
 *
 * It consists of a heading and a slider showcasing partner logos.
 * The layout is responsive, using a grid that adapts to different screen sizes.
 *
 * @component
 * @returns {JSX.Element} The rendered PartnerSection component.
 */

const PartnerSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid columns={{ initial: "1", lg: "6" }} gap="7" align="center">
      <Box gridColumn={{ initial: "1 / -1", lg: "1 / 3" }}>
        <Heading
          as="h2"
          size="4"
          weight="medium"
          align={{ initial: "center", lg: "left" }}
        >
          {t("landing.partner.desc")}
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
        {/* <Slider
          width="150px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"var(--color-background)"}
        >
          {partnerLogos.map((logo, index) => (
            <Slider.Slide key={index}>
              <Image src={logo} alt={`logo ${index}`} width="80" height="80" />
            </Slider.Slide>
          ))}
        </Slider> */}
      </Flex>
    </Grid>
  );
};

export default PartnerSection;
