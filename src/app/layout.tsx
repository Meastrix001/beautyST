import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Footer, Navbar } from "@/components";
import I18nProvider from "@/providers/I18nProvider";
import { brand } from "@/theme/brand.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: brand.company.name,
  description: "Get full body waxed in Tallinn, Estonia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={brand.defaultLanguage}>
      <body>
        <I18nProvider>
          <Theme>
            <Box>
              <Flex direction="column" minHeight="100vh">
                <Navbar />

                <Box flexGrow="1">{children}</Box>
                <Footer />
              </Flex>
            </Box>
          </Theme>
        </I18nProvider>
      </body>
    </html>
  );
}
