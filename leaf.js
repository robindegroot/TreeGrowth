function Leaf() {
  this.pos = createVector(150 + random(700), random(height - 150));
  this.reached = false;

  this.show = function() {
    fill(50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}
