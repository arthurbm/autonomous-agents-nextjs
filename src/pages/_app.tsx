import { CustomSketch } from "@/components/custom-sketch";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  HStack,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box w={"100%"} h={"100vh"} backgroundColor={"gray.50"}>
        <Header />
        <Box w={"100%"} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
