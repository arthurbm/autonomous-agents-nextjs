import { IframeContainer } from "@/components/iframe-container";
import { Box, Text } from "@chakra-ui/react";

export default function AStar() {
  return (
    <IframeContainer>
      <Text>Busca A*</Text>
      <Box
        w={"full"}
        h={"full"}
        as="iframe"
        src="https://editor.p5js.org/ArthurBM/full/R8K-hns9q"
      />
    </IframeContainer>
  );
}
