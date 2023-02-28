import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

// import { Container } from './styles';

export function Header() {
  return (
    <HStack
      w={"100%"}
      h={"10vh"}
      backgroundColor={"blue.500"}
      display={"flex"}
      justifyContent={"center"}
    >
      <ButtonGroup colorScheme={"red"} justifyContent={"space-between"}>
        <Link href={"/breadth-first"}>
          <Button>Largura</Button>
        </Link>
        <Link href={"/depth"}>
          <Button>Profundidade</Button>
        </Link>

        <Link href={"/uniform-cost"}>
          <Button>Custo Uniforme</Button>
        </Link>

        <Link href={"/greedy"}>
          <Button>Gulosa</Button>
        </Link>

        <Link href={"/a-star"}>
          <Button>A*</Button>
        </Link>
      </ButtonGroup>
    </HStack>
  );
}
