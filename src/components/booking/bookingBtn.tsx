import { Button, Flex, Link, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export const BookingButton = ({ onlyBtn }: { onlyBtn?: boolean }) => {
  const { t } = useTranslation();

  if (onlyBtn) {
    return <BTN />;
  }

  return (
    <Flex direction="column" className="bookingButton">
      <Text size="6" mt="5" mb="5" align="center">
        {t("bookingbtn.reminder")}{" "}
      </Text>
      <BTN />
      <Text size="4" align="center">
        {t("bookingbtn.bio")}
      </Text>
      <Text size="5" align="center">
        {t("bookingbtn.langInfo")}
      </Text>
    </Flex>
  );
};

const BTN = () => {
  const { t } = useTranslation();

  const BookingLink =
    "https://broneerimine.timma.ee/ilustuudiomarielltallinnehitajatetee114";

  return (
    <Link
      className="hover"
      href={BookingLink}
      target="_blank"
      style={{ color: "black" }}
    >
      <Flex direction="column" mb="5">
        <Button
          className="hover"
          size="4"
          color="pink"
          variant="soft"
          style={{ width: "100%", color: "black" }}
        >
          {t("bookingbtn.btn")}
        </Button>{" "}
      </Flex>
    </Link>
  );
};
