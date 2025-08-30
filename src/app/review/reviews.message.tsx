import { brand } from "@/theme/brand.config"
import { Box, Flex, Text } from "@radix-ui/themes"
import Image from "next/image"

export const ReviewsMessage = () => {
    return <Box>
        <Flex direction="column" justify="center" align="center">
            <Text size="7">Thank you!</Text>
            <Text
                color="gray"
                size="4"
                className="prices__subtitle"
                align="center"
                mb="7"
            >
                Thank you so much for your review! We really appreciate your feedback
                and support.
            </Text>

            <Image src={brand.company.logo} alt="brand logo" />
        </Flex>
    </Box>
}