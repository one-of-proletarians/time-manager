import { FC } from "react";
import { Word, WordPropsType } from "./Word";

type PausePropsType = Pick<WordPropsType, "onClose">;

export const Translate: FC<PausePropsType> = ({ onClose }) => {
  return (
    <Word bgColor={"rgba(144, 205, 244, 0.4)"} onClose={onClose} value="T" />
  );
};
