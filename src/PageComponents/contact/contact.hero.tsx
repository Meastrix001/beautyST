import { DrawingPinFilledIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { Flex, Heading, Text } from "@radix-ui/themes"
import Link from "next/link"

export const ContactHero = () => {
    return <Flex direction="column" align="center" gap="2">
        <Heading size="8" weight="bold" mb="0" as="h1">
            <DrawingPinFilledIcon width="24px" height="24px" /> Ilustuudio
            Mariell Tallinn
        </Heading>
        <Link
            className="contact__link"
            target="_blank"
            href="https://maps.app.goo.gl/LZF8gxW5QXRok6iRA"
        >
            <Flex align="center" justify="center" gap="2">
                <Text size="6">Ehitajate tee 114, 13517 Tallinn </Text>
                <ExternalLinkIcon width="24px" height="24px" />
            </Flex>
        </Link>
    </Flex>
}