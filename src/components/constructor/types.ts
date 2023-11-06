import { BoxProps } from "@chakra-ui/react";

export type ListType = {
  type: ElemType;
  value: string;
};

export type PauseType = "P:1" | "P:2" | "P:3" | "P:4" | "P:5";

export type ElemType = "W" | "T" | "C" | "P" | PauseType;

export type WordProps = BoxProps & {
  value: string;
  onClose(): void;
};

export type ConstructorProps = { onChange(value: ElemType[]): void };

export type ElementProps = Pick<WordProps, "onClose">;

export type PauseProps = ElementProps & { pause: string };

export type CreatorProps = BoxProps & {
  onCreate(type: ElemType): void;
};
