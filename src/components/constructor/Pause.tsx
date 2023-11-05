import { FC } from "react";
import { Word, WordPropsType } from "./Word";

type PausePropsType = Pick<WordPropsType, "onClose"> & { pause: number };

export const Pause: FC<PausePropsType> = ({ onClose, pause }) => {
  return (
    <Word
      bgColor={"rgba(254, 178, 178, 0.4)"}
      onClose={onClose}
      value={`${pause}`}
    />
  );
};
