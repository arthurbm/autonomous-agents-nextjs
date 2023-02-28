import { IframeContainer } from "@/components/iframe-container";
import { Box, Text } from "@chakra-ui/react";

export default function Greedy() {
  return (
    <IframeContainer>
      <Text>Busca gulosa</Text>
      <Box
        w={"full"}
        h={"full"}
        as="iframe"
        src="https://editor.p5js.org/ArthurBM/full/OWltqgKA_"
      />
    </IframeContainer>
  );
}
