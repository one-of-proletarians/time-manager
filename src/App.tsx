import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Constructor } from "./components/Constructor";

export const App: FC = () => {
  return (
    <Flex
      className="name"
      h={"100vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
    >
      <Constructor
        onChange={(value) =>
          console.info("%c[ELEMS]", "background:blue", value)
        }
      />
    </Flex>
  );
};
