"use client"
import { PageLang } from "@/models/pageLang.model";
import { getNestedValue } from "@/utils/getNestedValues";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Button, DataList, Flex, Text } from "@radix-ui/themes"
import Link from "next/link";

import { JSX } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const ContactListItem = ({ item, idx, lang }: {
    item: {
        key: string;
        value: string;
        icon: JSX.Element;
    },
    idx: number
    lang: "et" | "en"
} & PageLang) => {


    return <DataList.Item
        key={idx}
        align="center"
        className="contact__item"
    >
        <DataList.Label minWidth="120px">
            <Flex align="center" gap="2">
                {item.icon}
                <Text size="5" weight="bold">
                    {getNestedValue(LanguageKeys[lang], item.key) || item.key}

                </Text>
            </Flex>
        </DataList.Label>
        <DataList.Value>
            <SocialButtons item={item} />
        </DataList.Value>
    </DataList.Item>

}

interface SocialButtonsProps {
    item: {
        key: string;
        value: string;
        icon: JSX.Element;
    };
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ item }) => {
    const social = {
        Facebook: {
            icon: <FaFacebookF />,
            color: "#1877F2",
        },
        Instagram: {
            icon: <FaInstagram />,
            color: "#E1306C",
        },
    };


    const logo = social[item.key as "Facebook"];

    if (item.key === "Facebook" || item.key === "Instagram") {
        return (
            <Box style={{ display: "flex", gap: "0.5rem" }} width={"100%"}>
                <Link href={item.value} target="_blank" rel="noopener noreferrer" >
                    <Button size="2" variant="solid" style={{ width: "100%", padding: "0.5rem", backgroundColor: logo.color, }}>
                        {logo.icon} {item.key}
                    </Button>
                </Link>
            </Box>
        );

    } else {
        return <Text size="5">{item.value}</Text>
    }
};
