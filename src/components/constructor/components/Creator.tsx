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
import type { CreatorProps, ElemType, ListType } from "../types";
import { CustomBadge } from "./CustomBadge";

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
    _groupActive: { bgColor: "red" },
  },
});

const seconds = [1, 2, 3, 4, 5];

export const Creator: FC<CreatorProps> = ({ onCreate, ...props }) => {
  const menuList: ListType[] = [
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
        data-group
        borderRadius={"md"}
        _hover={{ bgColor: "whiteAlpha.300" }}
        _active={{ bgColor: "whiteAlpha.300" }}
      >
        <Tag {...props}>
          <Dot />
        </Tag>
      </MenuButton>
      <MenuList>
        {menuList.map(({ type, value }) =>
          "P" === type ? (
            <Box key={type}>
              <MenuDivider mb={0} />
              <MenuList
                border={"none"}
                bgColor={"transparent"}
                boxShadow={"none"}
              >
                <VStack>
                  <Text w={"full"} pl={3}>
                    {value}
                  </Text>
                  <HStack>
                    {seconds.map((pause) => (
                      <Button
                        key={pause}
                        as={MenuItem}
                        w={"auto"}
                        size={"sm"}
                        onClick={() => onCreate(`P:${pause}` as ElemType)}
                      >
                        {pause}
                      </Button>
                    ))}
                  </HStack>
                </VStack>
              </MenuList>
            </Box>
          ) : (
            <MenuItem key={type} onClick={() => onCreate(type)}>
              {value}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};
