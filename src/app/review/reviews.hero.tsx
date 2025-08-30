import { Box, Heading, Text } from "@radix-ui/themes"

export const ReviewsHero = () => {

    return <Box className="prices__hero" mb="6">
        <Heading size="8" weight="bold" mb="3" align="center">
            Leave a Review
        </Heading>
        <Text size="4" className="prices__subtitle" align="center">
            We’d love to hear your feedback about your service!
        </Text>
    </Box>
}