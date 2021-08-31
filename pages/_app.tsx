import type { AppProps } from "next/app";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    spacejelly: "#692ba8",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
