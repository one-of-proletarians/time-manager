import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { FC } from "react";
import { CustomBadge } from "./CustomBadge";
import { ElemType, ListType } from "./types";

type CreatorPropsType = {
  onCreate(type: ElemType): void;
};

const Tag = chakra(CustomBadge, {
  baseStyle: {
    w: 4,
    h: 4,
    p: 0,
    cursor: "pointer",
  },
});

const Dot = chakra("div", {
  baseStyle: {
    w: 1.5,
    h: 1.5,
    borderRadius: "full",
    bgColor: "whiteAlpha.700",
  },
});

const seconds = [1, 2, 3, 4, 5];

export const Creator: FC<CreatorPropsType> = ({ onCreate, ...props }) => {
  const list: ListType[] = [
    {
      type: "W",
      value: "Слово",
    },
    {
      type: "T",
      value: "Перевод",
    },
    {
      type: "P",
      value: "Пауза (в секундах)",
    },
  ];

  return (
    <Menu>
      <MenuButton
        _hover={{ bgColor: "whiteAlpha.300" }}
        _active={{ bgColor: "whiteAlpha.300" }}
        borderRadius={"md"}
        data-group
      >
        <Tag {...props}>
          <Dot _groupActive={{ bgColor: "red" }} />
        </Tag>
      </MenuButton>
      <MenuList>
        {list.map((item) => {
          if (item.type === "P") {
            return (
              <Box key={item.type}>
                <MenuDivider mb={0} />
                <MenuList
                  border={"none"}
                  bgColor={"transparent"}
                  boxShadow={"none"}
                >
                  <VStack>
                    <Text w={"full"} pl={3}>
                      {item.value}
                    </Text>
                    <HStack>
                      {seconds.map((pause) => (
                        <Button
                          key={pause}
                          as={MenuItem}
                          w={"auto"}
                          onClick={() => onCreate(`P:${pause}` as ElemType)}
                          size={"sm"}
                        >
                          {pause}
                        </Button>
                      ))}
                    </HStack>
                  </VStack>
                </MenuList>
              </Box>
            );
          }
          return (
            <MenuItem key={item.type} onClick={() => onCreate(item.type)}>
              {item.value}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
