import { Button, Flex, Link, Text } from "@radix-ui/themes";

export const BookingButton = () => {
  const BookingLink =
    "https://broneerimine.timma.ee/ilustuudiomarielltallinnehitajatetee114";

  return (
    <Flex direction="column" className="bookingButton">
      <Link
        className="hover"
        href={BookingLink}
        target="_blank"
        style={{ color: "black" }}
      >
        <Flex direction="column" mb="4">
          <Text size="6" mt="4" mb="2" align="center">
            Please book your appointment in advance
          </Text>
          <Button
            className="hover"
            size="4"
            color="pink"
            variant="soft"
            style={{ width: "100%", color: "black" }}
          >
            Book a time
          </Button>{" "}
        </Flex>
      </Link>
      <Text size="4" align="center">
        Booking is quick and easy through our online system, or you can contact
        us directly to find a time that works for you. Thank you for helping us
        make every visit relaxing and enjoyable!
      </Text>
      <Text size="5" align="center">
        We warmly welcome all our clients and are happy to assist you in English
        or Estonian.
      </Text>
    </Flex>
  );
};
