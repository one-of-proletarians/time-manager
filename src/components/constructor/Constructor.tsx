import { CloseButton, HStack, chakra } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Creator } from "./Creator";
import { Pause } from "./Pause";
import { Translate } from "./Translate";
import { OriginalWord } from "./OriginalWord";

type ConstructorPropsType = {};

export type CreatorType = "WORD" | "TRANSLATE" | "CREATOR" | "PAUSE";

type PauseElementType = { type: "PAUSE"; value: number };
type WordType = {
  type: CreatorType;
};

type ElementType = PauseElementType | WordType;

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
  const [elements, editElement] = useState<ElementType[]>([
    { type: "CREATOR" },
    { type: "WORD" },
    { type: "CREATOR" },
    { type: "PAUSE", value: 2 },
    { type: "CREATOR" },
    { type: "TRANSLATE" },
    { type: "CREATOR" },
    { type: "PAUSE", value: 4 },
    { type: "CREATOR" },
  ]);
  const handleClose = (index: number) => {
    editElement((elems) =>
      elems.filter(
        (_, elemIndex) => elemIndex !== index + 1 && elemIndex !== index
      )
    );
  };

  const handleCreate = (type: CreatorType, value: number, index: number) =>
    editElement((elems) => {
      let newarr: ElementType[] = [];

      elems.forEach((elem, i) => {
        if (index !== i) {
          newarr.push(elem);
        } else {
          newarr = newarr.concat([
            { type: "CREATOR" },
            { type, value },
            { type: "CREATOR" },
          ]);
        }
      });

      return newarr;
    });

  return (
    <HStack>
      <Component>
        {elements.map(({ type, value }, index) => {
          const key = type + index;

          switch (type) {
            case "CREATOR":
              return (
                <Creator
                  key={key}
                  onCreate={(t, pause) => handleCreate(t, pause || 1, index)}
                />
              );

            case "PAUSE":
              return (
                <Pause
                  key={key}
                  pause={value}
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
        onClick={() => editElement([{ type: "CREATOR" }])}
      />
    </HStack>
  );
};
