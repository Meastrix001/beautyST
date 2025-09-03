import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
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
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="BBS.Tallinn" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <I18nProvider>
          <Theme>
            <Box>
              <Flex direction="column" minHeight="100vh">
                <Navbar />
                <Box flexGrow="1">{children}
                  <SpeedInsights />
                  <Analytics />
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


