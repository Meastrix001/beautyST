"use client";
import {
  CTASection,
  FeaturesSection,
  HeroSection,
  PartnerSection,
  // TestimonialsSection,
  USPSection,
} from "@/components";
import { Box, Container, Flex, Separator } from "@radix-ui/themes";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  const bgImages = [
    "/static/landing/slider/slider_2.jpg",
    "/static/landing/slider/slider_3.jpg",
    "/static/landing/slider/slider_4.jpg",
    "/static/landing/slider/slider_5.jpg",
    "/static/landing/slider/slider_6.jpg",
    "/static/landing/slider/slider_1.jpg",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  return (
    <Box className="landing">
      <Box className="div-one" />
      <Box
        className="bg_test"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          transition: "background-image 1s ease-in-out",
        }}
      />

      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <Box className="index-top" p="0">
            <Flex
              align="center"
              justify="center"
              direction="column"
              mb={{ initial: "9", lg: "10rem" }}
              style={{
                minHeight: "calc((100vh - 102px) - (16px* var(--scaling)))",
              }}
            >
              <HeroSection />
            </Flex>
            <PartnerSection />

            <Separator size="4" />

            <FeaturesSection />

            <Separator size="4" />

            <USPSection />

            <Separator size="4" />
          </Box>
        </Flex>
      </Container>

      {/* <Flex direction="column" py="9"> */}
      {/* <TestimonialsSection /> */}
      {/* </Flex> */}

      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9" mb="9">
          <CTASection />
        </Flex>
      </Container>
    </Box>
  );
}
