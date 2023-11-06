import { FC } from "react";
import { PauseProps } from "../types";
import { Word } from "./Word";

export const Pause: FC<PauseProps> = ({ onClose, pause }) => (
  <Word bgColor={"voiceColor.pause"} onClose={onClose} value={pause} />
);
