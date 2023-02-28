import p5Types, { Vector } from "p5";
import { Box, Text } from "@chakra-ui/react";
import { Vehicle } from "./vehicle";
import { CustomSketch } from "@/components/custom-sketch";

export default function AStar() {
  let v: Vehicle;
  let target: Vector;

  function setup(p5: p5Types, canvasParentRef: Element) {
    p5.createCanvas(800, 800).parent(canvasParentRef);
    v = new Vehicle(p5.width / 2, p5.height / 2, p5);
    target = p5.createVector(p5.width / 2, p5.height / 2);
  }

  function draw(p5: p5Types) {
    p5.background(0);

    // Draw an ellipse at the target position
    p5.fill(51);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.ellipse(target.x, target.y, 24, 24);

    if (Vector.dist(v.position, target) < 8) {
      target = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      v.counter++;
    }

    // Call the appropriate steering behaviors for our agents
    v.arrive(target, p5);
    v.update();
    v.display(p5);

    p5.textSize(32);
    p5.fill(255);
    p5.text(v.counter, 10, 30);
  }

  return (
    <Box>
      <Text>Busca A*</Text>
      <CustomSketch setup={setup} draw={draw} />
    </Box>
  );
}
