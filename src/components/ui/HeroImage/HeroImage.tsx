"use client";
import { AspectRatio, Box } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { brand } from "@/theme/brand.config";

const HeroImage: React.FC = () => {
  return (
    <Box maxWidth="100%">
      <AspectRatio ratio={4 / 2}>
        <Image src={brand.company.logo} alt="Hero image" fill quality={100} />
      </AspectRatio>
    </Box>
  );
};

export default HeroImage;
