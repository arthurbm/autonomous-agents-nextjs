import { IframeContainer } from "@/components/iframe-container";
import { AspectRatio, Box, Text } from "@chakra-ui/react";

export default function BreadthFirst() {
  return (
    <IframeContainer>
      <Text>Busca em largura</Text>
      <Box
        w={"full"}
        h={"full"}
        as="iframe"
        src="https://editor.p5js.org/ArthurBM/full/3kuf0ER-Y"
      />
    </IframeContainer>
  );
}
