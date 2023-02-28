import { IframeContainer } from "@/components/iframe-container";
import { Box, Text } from "@chakra-ui/react";

export default function Depth() {
  return (
    <IframeContainer>
      <Text>Busca em profundidade</Text>
      <Box
        w={"full"}
        h={"full"}
        as="iframe"
        src="https://editor.p5js.org/ArthurBM/full/BfOEdtv2I"
      />
    </IframeContainer>
  );
}
