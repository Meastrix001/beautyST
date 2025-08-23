"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Separator,
  Container,
} from "@radix-ui/themes";
import { pricesDataMen, pricesDataWomen } from "./priceData";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";

export default function Prices() {
  const { t } = useTranslation();

  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          <Box className="prices__hero" mb="6">
            <Heading size="8" weight="bold" mb="3" align="center">
              {t("ss.header")}
            </Heading>
            <Text size="4" className="prices__subtitle" align="center">
              {t("ss.bio")}
            </Text>
          </Box>

          <Separator size="4" />

          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >
            <Box className="prices__list-section">
              <Flex align="center" justify="center" mb="4" gap="2">
                <Image
                  src="/static/wax/wax-sticks.png"
                  alt=""
                  className="prices__icon"
                  width="1000"
                  height="1000"
                />
                <Text size="8" weight="bold">
                  {t("ss.rowWomen.heading")}
                </Text>
              </Flex>

              {pricesDataWomen.map((doc, idx) => (
                <Flex key={idx} className="prices__item" align="center">
                  <Text as="p" size="6">
                    {t(doc.nameKey)}{" "}
                  </Text>
                  <Box className="prices__dots" />
                  <Text as="p" size="6">
                    {doc.price} / {doc.duration}
                  </Text>
                </Flex>
              ))}
            </Box>

            <Box className="prices__list-section">
              <Flex align="center" justify="center" mb="4" gap="2">
                <Text size="8" weight="bold">
                  {t("ss.rowMen.heading")}
                </Text>
                <Image
                  width="1000"
                  height="1000"
                  src="/static/wax/wax-sticks.png"
                  alt=""
                  className="prices__icon flipped"
                />
              </Flex>
              {pricesDataMen.map((doc, idx) => (
                <Flex key={idx} className="prices__item" align="center">
                  <Text as="p" size="6">
                    {t(doc.nameKey)}{" "}
                  </Text>
                  <Box className="prices__dots" />
                  <Text as="p" size="6">
                    {doc.price} / {doc.duration}
                  </Text>
                </Flex>
              ))}
              <Text>{t("ss.mensNote")}</Text>
            </Box>
          </Flex>

          <Box mt="9" mb="9">
            <BookingButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
