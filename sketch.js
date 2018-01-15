var tree;
var max_dist = 100;
var min_dist = 30;
//create canvas and tree class
function setup() {
  createCanvas(900, 900);
  tree = new Tree();
}
// draw tree
function draw() {
  background(47);
  tree.show();
  tree.grow();
}
setTimeout(function()
{
  location.reload();
}, 6000);
