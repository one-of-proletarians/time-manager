import { CloseButton, HStack, chakra } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Creator } from "./Creator";
import { Pause } from "./Pause";
import { Translate } from "./Translate";
import { OriginalWord } from "./OriginalWord";
import { ElemType } from "./types";

type ConstructorPropsType = {};

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
  const [elements, editElement] = useState<ElemType[]>([
    "C",
    "W",
    "C",
    "P:2",
    "C",
  ]);

  useEffect(() => {
    const string = elements.filter((e) => e !== "C");
    console.clear();
    console.info(string);
  }, [elements]);

  const handleClose = (index: number) => {
    editElement((elems) =>
      elems.filter(
        (_, elemIndex) => elemIndex !== index + 1 && elemIndex !== index
      )
    );
  };

  const handleCreate = (type: ElemType, index: number) =>
    editElement((elems) => {
      let newArrayElements: ElemType[] = [];

      elems.forEach((elem, i) => {
        if (index !== i) {
          newArrayElements.push(elem);
        } else {
          const [element, pause] = type.split(":");
          const newElement = (
            pause ? `${element}:${pause}` : element
          ) as ElemType;

          newArrayElements = [...newArrayElements, "C", newElement, "C"];
        }
      });

      return newArrayElements;
    });

  return (
    <HStack>
      <Component>
        {elements.map((type, index) => {
          const key = type + index;

          const [element, pause] = type.split(":");

          switch (element as ElemType) {
            case "C":
              return (
                <Creator key={key} onCreate={(t) => handleCreate(t, index)} />
              );

            case "P":
              return (
                <Pause
                  key={key}
                  pause={Number(pause)}
                  onClose={() => handleClose(index)}
                />
              );
            case "T":
              return <Translate key={key} onClose={() => handleClose(index)} />;
            case "W":
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
