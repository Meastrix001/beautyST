import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Footer, Navbar } from "@/components";
import I18nProvider from "@/providers/I18nProvider";
import type { Metadata } from "next";
import { brand } from "@/theme/brand.config";

export const metadata: Metadata = {
  metadataBase: new URL(brand.company.site), // ✅ important for resolving OG/Twitter images

  alternates: {
    canonical: "layout"
  },
  title: brand.company.name,
  description: "Get full body waxed in Tallinn, Estonia",
  openGraph: {
    title: brand.company.name,
    description: "Get full body waxed in Tallinn, Estonia",
    url: `${brand.company.site}`,
    siteName: brand.company.name,
    images: [
      {
        url: brand.company.logo.src,
        width: 1200,
        height: 630,
        alt: `${brand.company.name} hero image`,
      },
    ],
    type: "website",
  },
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


