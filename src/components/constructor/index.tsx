import { CloseButton, HStack, chakra } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Creator } from "./components/Creator";
import { Original } from "./components/Original";
import { Pause } from "./components/Pause";
import { Translate } from "./components/Translate";
import { elementsFromString } from "./helpers/elementsFromString";
import { ConstructorProps, ElemType } from "./types";

const Component = chakra(HStack, {
  baseStyle: {
    py: 1,
    px: 0.5,
    minH: 8,
    minW: 8,
    justifyContent: "center",
    borderRadius: "md",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "purple.400",
    columnGap: 0.5,
  },
});

const defaultElements = elementsFromString("W,P:2,T,P:4");
// *******************************
// *******************************
// *******************************
export const Constructor: FC<ConstructorProps> = ({ onChange }) => {
  const [elements, editElement] = useState<ElemType[]>(defaultElements);

  useEffect(() => {
    onChange(elements.filter((e) => e !== "C") as ElemType[]);
  }, [elements]);

  const handleClose = (index: number) => {
    editElement((elems) =>
      elems.filter(
        (_, elemIndex) => elemIndex !== index + 1 && elemIndex !== index
      )
    );
  };

  const handleCreate = (type: ElemType, index: number) =>
    editElement((elements) =>
      elements.flatMap((elem, elemIndex) => {
        if (elemIndex !== index) return elem;

        const [element, pause] = type.split(":");
        const newElement = (pause ? `P:${pause}` : element) as ElemType;

        return ["C", newElement, "C"];
      })
    );

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
                  pause={pause}
                  onClose={() => handleClose(index)}
                />
              );
            case "T":
              return <Translate key={key} onClose={() => handleClose(index)} />;
            case "W":
              return <Original key={key} onClose={() => handleClose(index)} />;
          }
        })}
      </Component>
      <CloseButton
        isDisabled={elements.length === 1}
        bgColor={"whiteAlpha.200"}
        onClick={() => editElement(["C"])}
        _hover={{ bgColor: "whiteAlpha.400" }}
      />
    </HStack>
  );
};
