import { Constants } from "@/utils/constants/constantValues";
import { Box, DataList, Flex, Text } from "@radix-ui/themes";
import { contactData } from "@/pages/contact/contactData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container } from "../container/container";

export const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex align="center" className="footer">
      <Container>
        <Flex
          align="center"
          justify="between"
          className="footer__container"
          height="100%"
        >
          {/* Brand */}
          <Box width="200px" className="footer__brand">
            <img
              src={Constants.logo}
              alt=""
              className="hover"
              onClick={() => navigate("/")}
            />
          </Box>

          {/* Navigation */}
          <Flex
            className="footer__nav"
            style={{ textTransform: "uppercase", color: "black" }}
            direction={{ initial: "column", md: "row" }}
            gap="5"
          >
            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/")}
            >
              {t("nav.keys.home")}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/services-prices")}
            >
              {t("nav.keys.ss")}{" "}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/about")}
            >
              {t("nav.keys.aboutme")}{" "}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/contact")}
            >
              {t("nav.keys.contact")}{" "}
            </Text>
            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/faq")}
            >
              {t("nav.keys.faq")}{" "}
            </Text>
          </Flex>

          {/* Social Links as Collapsible (mobile-friendly) */}
          <DataList.Root style={{ gap: "0" }}>
            {contactData.map((item, idx) => (
              <DataList.Item
                key={idx}
                align="center"
                className="contact__item"
                style={{ padding: "0" }}
              >
                <DataList.Label minWidth="120px">
                  <Flex align="center" gap="2" p="0" className="hover">
                    {item.icon}
                    <Text size="5" weight="medium">
                      {t(item.key)}
                    </Text>
                  </Flex>
                </DataList.Label>
              </DataList.Item>
            ))}
          </DataList.Root>
        </Flex>

        <Box className="footer__copyright">
          <Text>
            &copy; {new Date().getFullYear()} BeautyByStiina - in Tallinn.{" "}
            {t("footer.arr")}
          </Text>
        </Box>
      </Container>
    </Flex>
  );
};
