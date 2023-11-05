import { CloseButton, HStack, chakra } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Creator } from "./Creator";
import { Pause } from "./Pause";
import { Translate } from "./Translate";
import { OriginalWord } from "./OriginalWord";

type ConstructorPropsType = {};

type PauseType = "P:1" | "P:2" | "P:3" | "P:4" | "P:5";

export type ElemType = "W" | "T" | "C" | PauseType;

const Component = chakra(HStack, {
  baseStyle: {
    p: 1,
    gap: 1,
    minH: 8,
    borderRadius: "md",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "purple.400",
    columnGap: 0.5,
  },
});

export const Constructor: FC<ConstructorPropsType> = () => {
  const [elements, editElement] = useState<ElemType[]>(["C", "W", "C", "P:2"]);
  const handleClose = (index: number) => {
    editElement((elems) =>
      elems.filter(
        (_, elemIndex) => elemIndex !== index + 1 && elemIndex !== index
      )
    );
  };

  const handleCreate = (type: ElemType, index: number) =>
    editElement((elems) => {
      let newarr: ElemType[] = [];

      elems.forEach((elem, i) => {
        if (index !== i) {
          newarr.push(elem);
        } else {
          newarr = newarr.concat(["C", "C"]);
        }
      });

      return newarr;
    });

  return (
    <HStack>
      <Component>
        {elements.map(({ type }, index) => {
          const key = type + index;

          switch (type) {
            case "CREATOR":
              return (
                <Creator key={key} onCreate={(t) => handleCreate(t, index)} />
              );

            case "PAUSE":
              return (
                <Pause
                  key={key}
                  pause={33}
                  onClose={() => handleClose(index)}
                />
              );
            case "TRANSLATE":
              return <Translate key={key} onClose={() => handleClose(index)} />;
            case "WORD":
              return (
                <OriginalWord key={key} onClose={() => handleClose(index)} />
              );
          }
        })}
      </Component>
      <CloseButton
        isDisabled={elements.length === 1}
        bgColor={"whiteAlpha.200"}
        _hover={{ bgColor: "whiteAlpha.400" }}
        onClick={() => editElement(["C"])}
      />
    </HStack>
  );
};
