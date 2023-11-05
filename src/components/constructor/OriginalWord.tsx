import { FC } from "react";
import { Word, WordPropsType } from "./Word";

type PausePropsType = Pick<WordPropsType, "onClose">;

export const OriginalWord: FC<PausePropsType> = ({ onClose }) => {
  return (
    <Word bgColor={"rgba(154, 230, 180, 0.4)"} onClose={onClose} value="W" />
  );
};
