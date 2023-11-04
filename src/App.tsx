import { Badge, Button, CloseButton, Flex, HStack } from "@chakra-ui/react";
import { FC, useState } from "react";

type ChipPauseType = {
  type: "PAUSE";
  pause: 1 | 2 | 3 | 4 | 5;
};

type ChipType =
  | ChipPauseType
  | {
      type: "WORD" | "TRANSLATE";
    };

export const App: FC = () => {
  const [chips, toggleChips] = useState<ChipType[]>([
    { type: "TRANSLATE" },
    // @ts-ignore
    { type: "o" },
    { type: "PAUSE", pause: 3 },
    { type: "WORD" },
    { type: "PAUSE", pause: 3 },
  ]);

  const removeChip = (key: number) => {
    toggleChips((chips) => chips.filter((_, index) => index !== key));
  };

  return (
    <Flex direction="column" align={"center"} justify={"center"} h={"full"}>
      <HStack>
        <Button
          onClick={() => {
            toggleChips((chips) => [...chips, { type: "WORD" }]);
          }}
        >
          Add
        </Button>
      </HStack>
      <HStack border={"1px  dashed red"} height={8} borderRadius={5} mt={3}>
        {chips.map((chip, key) => (
          <Badge
            key={key}
            colorScheme="purple"
            display={"flex"}
            alignItems={"center"}
            p={1}
          >
            {chip.type} {chip?.pause}
            <CloseButton
              size={"sm"}
              ml={1}
              onClick={() => removeChip(key)}
            ></CloseButton>
          </Badge>
        ))}
      </HStack>
    </Flex>
  );
};
