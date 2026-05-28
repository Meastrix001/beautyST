"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Button, Flex, Text } from "@radix-ui/themes";

export const BookingButton = ({ onlyBtn, lang }: { onlyBtn?: boolean } & PageLang) => {

  if (onlyBtn) {
    return <BTN lang={lang} />;
  }

  return (
    <InViewWrapper direction="bottom">
      <Flex direction="column" className="bookingButton">
        <Text size="6" mt="5" mb="5" align="center">
          {LanguageKeys[lang].bookingbtn.reminder}
        </Text>
        <BTN lang={lang} />
        <Flex direction={"column"} style={{ textAlign: "center" }} mt={"4"}>
          <Text color="gray" size="3" align="center">
            {LanguageKeys[lang].bookingbtn.bio}
          </Text>
          <Text color="gray" size="3" align="center">
            {LanguageKeys[lang].bookingbtn.langInfo}
          </Text>
        </Flex>
      </Flex>

    </InViewWrapper>
  );
};

const BTN = ({ lang }: PageLang) => {
  // Waxing services have ended — booking is permanently disabled.
  return (
    <Flex direction="column">
      <Button
        size="4"
        color="gray"
        variant="soft"
        disabled
        style={{ width: "100%", cursor: "not-allowed" }}
        mb="0"
      >
        {LanguageKeys[lang].bookingbtn.unavailable}
      </Button>
    </Flex>
  );
};
