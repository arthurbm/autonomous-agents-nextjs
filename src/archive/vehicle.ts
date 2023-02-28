import p5Types, { Vector } from "p5";

export class Vehicle {
  acceleration: Vector;
  velocity: Vector;
  position: Vector;
  radius: number;
  maxspeed: number;
  maxforce: number;
  mass: number;
  counter: number;

  constructor(x: number, y: number, p5: p5Types) {
    this.acceleration = p5.createVector(0, 0);
    this.velocity = Vector.random2D();
    this.position = p5.createVector(x, y);
    this.radius = 8;
    this.maxspeed = 12;
    this.velocity.setMag(this.maxspeed);
    this.maxforce = 0.6;
    this.mass = 2;
    this.counter = -1;
  }

  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  applyForce(force: Vector) {
    this.acceleration.add(force.div(this.mass));
  }

  // A method that calculates a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  arrive(target: Vector, p5: p5Types) {
    var desiredVel = Vector.sub(target, this.position); // A vector pointing from the location to the target
    var desiredMag = desiredVel.mag();

    // Scale with arbitrary damping within 200 pixels
    if (desiredMag < 200) {
      var m = p5.map(desiredMag, 0, 200, 0, this.maxspeed);
      desiredVel.setMag(m);
    } else {
      desiredVel.setMag(this.maxspeed);
    }

    var steer = Vector.sub(desiredVel, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    this.applyForce(steer);
  }

  incrementCounter() {
    this.counter++;
  }

  display(p5: p5Types) {
    // Draw a triangle rotated in the direction of velocity
    var theta = this.velocity.heading() + Math.PI / 2;
    p5.fill(255);
    p5.stroke(255);
    p5.strokeWeight(1);
    p5.push();
    p5.translate(this.position.x, this.position.y);
    p5.rotate(theta);
    p5.beginShape();
    p5.vertex(0, -this.radius * 2);
    p5.vertex(-this.radius, this.radius * 2);
    p5.vertex(this.radius, this.radius * 2);
    p5.endShape();
    p5.pop();
  }
}
