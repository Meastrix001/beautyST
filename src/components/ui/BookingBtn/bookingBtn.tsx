"use client"
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Button, Flex, Link, Text } from "@radix-ui/themes";

export const BookingButton = ({ onlyBtn, lang }: { onlyBtn?: boolean } & PageLang) => {

  if (onlyBtn) {
    return <BTN lang={lang} />;
  }

  return (
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
  );
};

const BTN = ({ lang }: PageLang) => {

  const BookingLink =
    "https://broneerimine.timma.ee/ilustuudiomarielltallinnehitajatetee114";

  return (
    <Link
      className="hover"
      href={BookingLink}
      target="_blank"
      style={{ color: "black" }}
    >
      <Flex direction="column">
        <Button
          className="hover"
          size="4"
          color="pink"
          variant="soft"
          style={{ width: "100%", color: "black" }}
          mb="0"
        >
          {LanguageKeys[lang].bookingbtn.btn}
        </Button>{" "}
      </Flex>
    </Link>
  );
};
