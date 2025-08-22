import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { JSX } from "react";

export const contactData = [
  {
    key: "contact.key.email",
    value: "beautybystiina@hotmail.com",
    icon: <EnvelopeClosedIcon />,
  },
  {
    key: "contact.key.phone",
    value: "+372 565 715 52",
    icon: <ChatBubbleIcon />,
  },
  {
    key: "Facebook",
    value: "https://tinyurl.com/bjsjs2fp",
    icon: <ChatBubbleIcon />,
  },
  {
    key: "Instagram",
    value: "https://tinyurl.com/4v4pptcs",
    icon: <InstagramLogoIcon />,
  },
] as {
  key: string;
  value: string;
  icon: JSX.Element;
}[];
