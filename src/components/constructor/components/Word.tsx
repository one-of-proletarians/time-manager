import { CloseButton, Text } from "@chakra-ui/react";

import { FC } from "react";
import { WordProps } from "../types";
import { CustomBadge } from "./CustomBadge";

export const Word: FC<WordProps> = ({ value, onClose, ...props }) => {
  return (
    <CustomBadge data-group p={2} position={"relative"} {...props}>
      <Text
        fontSize={13}
        fontWeight={"bold"}
        transition={".2s"}
        _groupHover={{ opacity: 0 }}
      >
        {value}
      </Text>
      <CloseButton
        position={"absolute"}
        size={"sm"}
        onClick={onClose}
        opacity={0}
        w={"full"}
        transition={".2s"}
        _groupHover={{ opacity: 1 }}
      />
    </CustomBadge>
  );
};
