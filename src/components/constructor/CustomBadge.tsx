import { chakra } from "@chakra-ui/react";

export const CustomBadge = chakra("div", {
  baseStyle: {
    pl: 2,
    py: 0.5,
    h: 6,
    w: 8,
    borderRadius: "md",
    bgColor: "whiteAlpha.200",
    transition: ".3s",
    cursor: "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
