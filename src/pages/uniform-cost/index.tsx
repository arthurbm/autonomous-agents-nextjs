import { IframeContainer } from "@/components/iframe-container";
import { Box, Text } from "@chakra-ui/react";

export default function UniformCost() {
  return (
    <IframeContainer>
      <Text>Busca de custo uniforme</Text>
      <Box
        w={"full"}
        h={"full"}
        as="iframe"
        src="https://editor.p5js.org/ArthurBM/full/OPOH35OU8"
      />
    </IframeContainer>
  );
}
