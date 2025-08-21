import { BookingButton } from "@/components/booking/bookingBtn";
import { Container } from "@/components/container/container";
import {
  Box,
  ChevronDownIcon,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

import { useState } from "react";

export const FaqPage = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t("faq.data", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  return (
    <Box className="faq">
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
                {t("faq.header")}
              </Heading>
              <Text size="4" className="about__subtitle">
                {t("faq.subHeader")}{" "}
              </Text>
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
            <Box m="0 auto">
              {faqs.map((faq, index) => (
                <Box p="4" key={index} className=" hover faq-item">
                  <Flex
                    justify="between"
                    align="center"
                    onClick={() => toggle(index)}
                    className="faq-question"
                  >
                    <Text size="6" weight="medium">
                      {faq.question}
                    </Text>

                    <ChevronDownIcon
                      className={`faq-icon ${
                        openIndex === index ? "open" : ""
                      }`}
                    />
                  </Flex>

                  <Box
                    className={`faq-answer ${
                      openIndex === index ? "open" : ""
                    }`}
                    mt="2"
                  >
                    <Text size="5" color="gray">
                      {faq.answer}
                    </Text>
                  </Box>
                  <Box width="100%">
                    <Separator size="4" />
                  </Box>
                </Box>
              ))}
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
};
