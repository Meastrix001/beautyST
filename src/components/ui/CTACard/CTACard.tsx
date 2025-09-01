"use client"
import { Box, Heading, Text, Flex, Grid, AspectRatio } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { CTACardProps } from "./CTACard.types";


const CTACard: React.FC<CTACardProps> = ({
  heading,
  description,
  children,
  image,
}) => {
  return (
    <Box className="cta-card">
      <Grid columns={{ initial: "1", lg: "6" }} gap="8" align="center">
        {/* Heading */}
        <Flex
          direction="column"
          gap="4"
          gridColumn={{ initial: "1 / -1", lg: "1 / 4" }}
        >
          <Heading as="h2" size={{ initial: "7", lg: "8" }} m="0">
            {heading}
          </Heading>
          <Text as="p" size="3" color="gray">
            {description}
          </Text>
          {children && <Box>{children}</Box>}
        </Flex>
        <Flex
          gridColumn={{ initial: "1 / -1", lg: "4 / 7" }}
          justify="between"
          align="center"
        >
          <AspectRatio ratio={16 / 9}>
            <Flex align="center" justify="center" >
              <Image
                src={image}
                alt={heading}
                fill   // 👈 this makes the image fill the parent container
                quality={70}
                style={{
                  objectFit: "cover",
                  borderRadius: "var(--radius-3)",
                  objectPosition: "center 35%", // 👈 pushes the image content down
                }}
              />

            </Flex>
          </AspectRatio>
        </Flex>
      </Grid>
    </Box>
  );
};

export default CTACard;
