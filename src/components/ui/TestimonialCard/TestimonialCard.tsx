import { StarFilledIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex, Separator, Text } from "@radix-ui/themes";
import React from "react";
import { TestimonialCardProps } from "./TestimonialCard.types";

/**
 * Renders a testimonial card displaying a star rating, testimonial statement, and person details.
 *
 * @param props - The properties for the TestimonialCard component.
 * @param props.stars - The number of stars to display (out of 5).
 * @param props.statement - The testimonial statement text.
 * @param props.person - The person giving the testimonial, including avatar, name, and title.
 *
 * @returns A styled testimonial card component.
 */

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  statement,
  person,
}) => {
  return (
    <Box className="testimonial-card">
      <Flex direction="column" gap="4">
        <Flex>
          {Array.from({ length: 5 }, (_, index) => (
            <StarFilledIcon
              key={index}
              width={18}
              height={18}
              style={{ color: index < stars ? "gold" : "gray" }}
            />
          ))}
        </Flex>
        <Text as="p">{statement}</Text>
        <Separator
          orientation="horizontal"
          style={{ width: "100%", margin: "1rem 0" }}
        />
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            variant="solid"
            color="indigo"
            src={person.avatar}
            fallback={person.name.slice(0, 1).toUpperCase()}
          />
          <Flex direction="column" gap="0">
            <Text weight="bold" color="gray" highContrast truncate>
              {person.name}
            </Text>
            <Text color="gray" size="2" truncate>
              {person.title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
