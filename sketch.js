var tree;
var max_dist = 100;
var min_dist = 30;

function setup() {
  createCanvas(900, 900);
  tree = new Tree();
}

function draw() {
  background(47);
  tree.show();
  tree.grow();
}
function mousePressed(){
  redraw();
}
