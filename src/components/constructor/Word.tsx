import { CloseButton, Text } from "@chakra-ui/react";

import { FC } from "react";
import { CustomBadge } from "./CustomBadge";

export type WordPropsType = {
  value: string;
  onClose(): void;
  bgColor?: string;
};

export const Word: FC<WordPropsType> = ({
  value,
  onClose,
  bgColor = "",
  ...props
}) => {
  return (
    <CustomBadge
      bgColor={bgColor}
      {...props}
      p={2}
      position={"relative"}
      data-group
    >
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
