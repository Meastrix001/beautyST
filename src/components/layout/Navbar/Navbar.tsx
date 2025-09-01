"use client"
import React, { useState } from "react";
import { Container, Box, Grid, Flex } from "@radix-ui/themes";
import { Nav } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/theme/brand.config";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";
import { siteRoutesEn } from "@/routes/siteRoutes.en";

const Navbar: React.FC = () => {
  const [lang, setLang] = useState<string>("est")


  return (
    <Box className="navigation">
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Grid align="center" columns={{ initial: "3", lg: "6" }} gap="4">
          <Flex gridColumn={{ initial: "1 / 2", lg: "1 / 2" }} gridRow="1">
            <Link href={siteRoutesEn.home.path} title={brand.company.logo.alt}>
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
            {/* @ts-expect-error expected */}
            <Nav lang={lang} setLang={setLang} />
          </Flex>

          <LanguageSwitcher setLang={setLang} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
