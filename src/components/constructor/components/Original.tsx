import { FC } from "react";
import { ElementProps } from "../types";
import { Word } from "./Word";

export const Original: FC<ElementProps> = ({ onClose }) => (
  <Word bgColor={"voiceColor.original"} onClose={onClose} value="W" />
);
