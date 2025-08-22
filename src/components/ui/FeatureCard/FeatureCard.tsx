"use client";
import { AspectRatio, Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { FeatureCardProps } from "./FeatureCard.types";

const FeatureCard: React.FC<FeatureCardProps> = ({
  size,
  heading,
  description,
  image,
}) => {
  const isLarge = size === "large";

  return (
    <Box className="feature-card">
      <Grid
        columns={{ initial: "1", lg: "6" }}
        gap="4"
        justify="between"
        minHeight="100%"
      >
        <Box
          gridColumn={
            isLarge ? { initial: "1 / -1", lg: "1 / 5" } : { initial: "1 / -1" }
          }
          gridRow={isLarge ? "1" : "1"}
          py="3"
        >
          <Flex direction="column" gap="2">
            <Heading as="h3" size="7" weight="bold">
              {heading}
            </Heading>
            <Text as="p" color="gray" size="3">
              {description}
            </Text>
          </Flex>
        </Box>
        <Flex
          gridColumn={
            isLarge
              ? { initial: "1 / -1", lg: "5 / 7" }
              : { initial: "1 / -1", lg: "2 / 6" }
          }
          gridRow={isLarge ? { initial: "2", lg: "1" } : "2"}
        >
          <AspectRatio ratio={isLarge ? 4 / 5 : 4 / 3}>
            <Image
              src={image}
              alt={heading}
              fill
              quality={50}
              style={{
                objectFit: "cover",
                borderRadius: "var(--radius-3) var(--radius-3) 0 0",
              }}
            />
          </AspectRatio>
        </Flex>
      </Grid>
    </Box>
  );
};

export default FeatureCard;
