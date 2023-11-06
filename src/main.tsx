import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { App } from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    voiceColor: {
      pause: "rgba(254, 178, 178, 0.4)",
      original: "rgba(154, 230, 180, 0.4)",
      translate: "rgba(144, 205, 244, 0.4)",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
