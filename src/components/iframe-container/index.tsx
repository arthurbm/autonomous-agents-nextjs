import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export function IframeContainer({ children }: Props) {
  return (
    <Flex
      w={"full"}
      h={"full"}
      align={"center"}
      justify={"center"}
      flexDir={"column"}
    >
      <Box w={"40%"} h={"90%"}>
        {children}
      </Box>
    </Flex>
  );
}
