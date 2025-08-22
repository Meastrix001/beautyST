import React from "react";
import {
  HeartFilledIcon,
  PersonIcon,
  StarFilledIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import { USPItemProps } from "@/components/ui/USPItem/USPItem.types";

export const uniqueSellingPoints: USPItemProps[] = [
  {
    heading: "usp.data.0.heading",
    description: "usp.data.0.description",
    icon: <TimerIcon width="28" height="28" />,
  },
  {
    heading: "usp.data.1.heading",
    description: "usp.data.1.description",
    icon: <StarFilledIcon width="28" height="28" color="#EFBF04" />,
  },
  {
    heading: "usp.data.2.heading",
    description: "usp.data.2.description",
    icon: <HeartFilledIcon width="28" height="28" color="rgb(247, 177, 176)" />,
  },
  {
    heading: "usp.data.3.heading",
    description: "usp.data.3.description",
    icon: <PersonIcon width="28" height="28" />,
  },
];
