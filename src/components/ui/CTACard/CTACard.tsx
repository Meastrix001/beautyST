"use client";
import { Box, Heading, Text, Flex, Grid, AspectRatio } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { CTACardProps } from "./CTACard.types";

/**
 * CTACard is a reusable call-to-action card component.
 *
 * @remarks
 * This component displays a heading, description, optional children (such as buttons or links),
 * and an image. It uses a responsive grid layout to adjust the arrangement of content
 * based on the screen size.
 *
 * @param props.heading - The main heading text for the CTA card.
 * @param props.description - The description text displayed below the heading.
 * @param props.image - The source URL of the image to display on the card.
 * @param props.children - Optional React nodes to render below the description (e.g., buttons).
 *
 * @example
 * ```tsx
 * <CTACard
 *   heading="Join our newsletter"
 *   description="Stay updated with the latest news and offers."
 *   image="/newsletter.png"
 * >
 *   <Button>Subscribe</Button>
 * </CTACard>
 * ```
 */

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
            <Flex align="center" justify="center" height="100%">
              <Image
                src={image}
                alt={heading}
                // fill
                height={10}
                width={150}
                quality={50}
                style={{
                  objectFit: "cover",
                  borderRadius: "var(--radius-3) var(--radius-3)",
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
