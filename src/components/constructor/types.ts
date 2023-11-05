export type ListType = {
  type: ElemType;
  value: string;
};

export type PauseType = "P:1" | "P:2" | "P:3" | "P:4" | "P:5";

export type ElemType = "W" | "T" | "C" | "P" | PauseType;
