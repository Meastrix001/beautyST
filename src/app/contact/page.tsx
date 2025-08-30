"use client";
import { DrawingPinFilledIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  Box,
  DataList,
  Flex,
  Link,
  Text,
  Heading,
  Separator,
  Container,
  Button,
} from "@radix-ui/themes";
import { contactData } from "./contactData";
import { ContactMap } from "./Contact.map";
import { useTranslation } from "react-i18next";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { JSX } from "react";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Box className="contact">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="contact__container"
        >
          {/* Hero */}
          <Box className="contact__hero" mb="6">
            <Flex direction="column" align="center" gap="2">
              <Heading size="8" weight="bold" mb="0">
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
          </Box>

          <Separator size="4" />

          <Flex
            className="contact__content"
            direction={{ initial: "column", md: "row" }}
            align="stretch"
            justify="center"
            gap="6"
            mt="6"
            mb="9"
          >
            <Box className="contact__info">
              <Flex align="center" justify="center" height="100%">
                <DataList.Root>
                  {contactData.map((item, idx) => (
                    <DataList.Item
                      key={idx}
                      align="center"
                      className="contact__item"
                    >
                      <DataList.Label minWidth="120px">
                        <Flex align="center" gap="2">
                          {item.icon}
                          <Text size="5" weight="medium">
                            {t(item.key)}
                          </Text>
                        </Flex>
                      </DataList.Label>
                      <DataList.Value>

                        {/* <Text size="5">{item.value}</Text> */}
                        <SocialButtons item={item} />
                      </DataList.Value>
                    </DataList.Item>
                  ))}
                </DataList.Root>
              </Flex>
            </Box>

            {/* Map */}
            <Box className="contact__map">
              <ContactMap />
            </Box>
          </Flex>

          {/* Booking CTA */}
          <Box mb="9">
            <BookingButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
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
      <Box style={{ display: "flex", gap: "0.5rem" }}>
        <Link href={item.value} target="_blank" rel="noopener noreferrer">
          <Button size="2" variant="solid" style={{ padding: "0.5rem", backgroundColor: logo.color, }}>
            {logo.icon} {item.key}
          </Button>
        </Link>
      </Box>
    );

  } else {
    return <Text size="5">{item.value}</Text>
  }
};