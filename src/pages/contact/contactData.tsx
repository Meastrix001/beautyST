import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export const contactData = [
  {
    key: "contact.key.email",
    value: "beautybystiina@hotmail.com",
    icon: <EnvelopeClosedIcon />,
  },
  {
    key: "contact.key.phone",
    value: "123456789",
    icon: <ChatBubbleIcon />,
  },
  {
    key: "Facebook",
    value: "FB url",
    icon: <ChatBubbleIcon />,
  },
  {
    key: "Instagram",
    value: "insta url",
    icon: <InstagramLogoIcon />,
  },
] as {
  key: string;
  value: string;
  icon: any;
}[];
