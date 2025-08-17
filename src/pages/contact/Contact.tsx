import { Container } from "@/components/container/container";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
import { Box, DataList, Flex, Link, Text } from "@radix-ui/themes";
import { contactData } from "./contactData";
import { ContactMap } from "./Contact.map";
import { useTranslation } from "react-i18next";
import { BookingButton } from "@/components/booking/bookingBtn";

export const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Flex
      className="contact"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
    >
      <Container>
        <Box>
          <Flex direction="column">
            <Text>
              <DrawingPinFilledIcon width="24px" height="24px" />
            </Text>
            <Text size="6">Ilustuudio Mariell Tallinn</Text>
            <Link
              style={{ color: "black" }}
              target="_blank"
              href="https://maps.app.goo.gl/LZF8gxW5QXRok6iRA"
            >
              <Text size="8">Ehitajate tee 114, 13517 Tallinn</Text>
            </Link>
          </Flex>
        </Box>

        <Flex direction="row" align="center" justify="center" mb="9">
          <Box width="50%">
            <Flex align="center" justify="center">
              <DataList.Root>
                {contactData.map((item) => {
                  return (
                    <DataList.Item align="center">
                      <DataList.Label minWidth="88px">
                        <Flex align="center" justify="center" gap="2">
                          <Text>{item.icon}</Text>
                          <Text size="6" align="right">
                            {t(item.key)}
                          </Text>
                        </Flex>
                      </DataList.Label>
                      <DataList.Value>
                        <Text size="6">{item.value}</Text>
                      </DataList.Value>
                    </DataList.Item>
                  );
                })}
              </DataList.Root>
            </Flex>
          </Box>
          <Box width="50%">
            <ContactMap />
          </Box>
        </Flex>

        <BookingButton />
      </Container>
    </Flex>
  );
};
