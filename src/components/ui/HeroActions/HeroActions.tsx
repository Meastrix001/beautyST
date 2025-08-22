"use client";
import { DownloadIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";

const HeroActions: React.FC = () => {
  const router = useRouter();

  return (
    <Flex gap="4">
      <Button
        size="3"
        onClick={() =>
          router.push(
            "https://github.com/alexanderjuulj/high-converting-landing-page-template/archive/refs/heads/main.zip"
          )
        }
      >
        <DownloadIcon />
        Download
      </Button>
      <Button
        size="3"
        variant="soft"
        onClick={() =>
          router.push(
            "https://github.com/alexanderjuulj/high-converting-landing-page-template"
          )
        }
      >
        <GitHubLogoIcon />
        Learn More
      </Button>
    </Flex>
  );
};

export default HeroActions;
