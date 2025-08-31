import { JSX } from "react";
import { FaEnvelope, FaFacebook, FaInstagramSquare, FaPhone } from "react-icons/fa";

export const contactData = [
  {
    key: "contact.key.email",
    value: "beautybystiina@hotmail.com",
    icon: <FaEnvelope />,
  },
  {
    key: "contact.key.phone",
    value: "+372 565 715 52",
    icon: <FaPhone />,
  },
  {
    key: "Instagram",
    value: "https://tinyurl.com/4v4pptcs",
    icon: <FaInstagramSquare />,
  },
  {
    key: "Facebook",
    value: "https://tinyurl.com/bjsjs2fp",
    icon: <FaFacebook />,
  },
] as {
  key: string;
  value: string;
  icon: JSX.Element;
}[];
