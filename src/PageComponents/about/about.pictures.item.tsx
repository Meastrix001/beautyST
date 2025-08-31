import { Box, Card, Text } from "@radix-ui/themes"
import Image from "next/image"

export const AboutPicturesItem = ({ obj }: {
    obj: {
        desc: string,
        picture: string
    }
}) => {

    return <Card key={obj.desc} className="pets">
        <Box className="pets__image">
            <Box className="image">
                <Box className="image__content">
                    <Image
                        src={obj.picture}
                        alt="Bambi"
                        width={400}
                        height={300}
                    />
                </Box>
            </Box>
        </Box>
        <Text
            mt="2"
            as="p"
            size="4"
            weight="medium"
            align="center"
        >
            {obj.desc}
        </Text>
    </Card>
}