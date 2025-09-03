import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Footer, Navbar } from "@/components";
import I18nProvider from "@/providers/I18nProvider";
import { brand } from "@/theme/brand.config";
import { BuildSiteMap } from "@/utils/sitemap/sitemap.builder";

BuildSiteMap()
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
                <Box flexGrow="1">{children}
                  <SpeedInsights />
                </Box>
                <Footer />
              </Flex>
            </Box>
          </Theme>
        </I18nProvider>
      </body>
    </html>
  );
}


