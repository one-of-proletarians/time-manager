import { ElemType } from "../types";

export const elementsFromString = (value: string) =>
  value
    .split(",")
    .flatMap((E) => ["C", E])
    .concat("C") as ElemType[];
