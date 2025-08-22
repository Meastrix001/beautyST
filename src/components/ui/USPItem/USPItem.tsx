import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { USPItemProps } from "./USPItem.types";

/**
 * Renders a single Unique Selling Proposition (USP) item with an icon, heading, and description.
 *
 * @param props - The props for the USPItem component.
 * @param props.heading - The heading text for the USP item.
 * @param props.description - The description text for the USP item.
 * @param props.icon - The icon element to display for the USP item.
 *
 * @returns A React element displaying the USP item.
 */

const USPItem: React.FC<USPItemProps> = ({ heading, description, icon }) => {
  return (
    <Flex direction="column" gap="3" align="center" className="usp-item">
      <Box className="usp-item__icon">{icon}</Box>

      <Heading as="h3" m="0" align="center">
        {heading}
      </Heading>
      <Text as="p" align="center">
        {description}
      </Text>
    </Flex>
  );
};

export default USPItem;
