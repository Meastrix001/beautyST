import { Flex } from "@radix-ui/themes";
import { AboutPicturesItem } from "./about.pictures.item";

export const AboutPicturesList = () => {

    const picturesArr = [
        {
            picture: "/static/about/sarah.jpg",
            desc: "Saara ~ 15 Years old",
        },
        {
            picture: "/static/about/gin.jpg",
            desc: "Gin ~ 2.5 Years old",
        },
        {
            picture: "/static/about/bambi_2.png",
            desc: "Bambi ~ 7.5 Years old",
        },
    ];

    return <Flex
        direction={{ initial: "column", md: "row" }}
        justify="between"
        px="3"
        mb="2"
    >
        {picturesArr.map((obj, index) => {
            return (
                <AboutPicturesItem obj={obj} key={index} />
            );
        })}
    </Flex>
}