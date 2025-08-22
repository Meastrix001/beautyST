"use client";
import USPItem from "@/components/ui/USPItem/USPItem";
import { uniqueSellingPoints } from "@/constants/uniqueSellingPoints";
import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";
import { useTranslation } from "react-i18next";

const USPSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Flex gap="6" direction="column">
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            {t("usp.heading")}
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            {t("usp.subHeading")}
          </Text>
        </Flex>

        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap="6"
          justify="between"
        >
          {uniqueSellingPoints.map((usp, index) => (
            <USPItem
              key={index}
              heading={t(usp.heading)}
              description={t(usp.description)}
              icon={usp.icon}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default USPSection;
