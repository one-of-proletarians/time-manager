import { FC } from "react";
import { ElementProps } from "../types";
import { Word } from "./Word";

export const Translate: FC<ElementProps> = ({ onClose }) => (
  <Word bgColor={"voiceColor.translate"} onClose={onClose} value="T" />
);
