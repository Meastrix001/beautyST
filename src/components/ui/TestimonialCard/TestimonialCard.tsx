import { StarFilledIcon } from "@radix-ui/react-icons";
import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import React from "react";
import { Review } from "@/api/firebase.config";

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

const TestimonialCard: React.FC<{ review: Review, index: number }> = ({
  review,
  index
}) => {
  return (
    <Box className={`testimonial-card ${(index + 1) % 2 === 0 ? "light" : "dark"}`} height={"15rem"} >
      <Flex direction="column" gap="4" height={"15rem"} width={"100%"}>
        <Flex>
          {Array.from({ length: 5 }, (_, index) => (
            <StarFilledIcon
              key={index}
              width={18}
              height={18}
              style={{ color: index < review.rating ? "gold" : "gray" }}
            />
          ))}
        </Flex>
        <Text as="p" mb={"auto"}>{review.message}</Text>
        <Separator
          orientation="horizontal"
          style={{ width: "100%" }}
        />
        <Flex gap="3" align="center">
          <Flex direction="column" gap="0">
            <Text weight="bold" color="gray" highContrast truncate>
              {review.name}
            </Text>
            <Text color="gray" size="2" truncate>
              {new Date(review.created.seconds * 1000).toLocaleDateString()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
