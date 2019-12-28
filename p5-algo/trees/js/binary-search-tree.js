// https://www.youtube.com/watch?v=ZNH0MuQ51m4&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=2
// 24
var tree;
function setup() {
  noCanvas();
  tree = new Tree();
  tree.addValue(5);
  tree.addValue(3);
  tree.addValue(8);
  tree.addValue(7);
  tree.addValue(11);
  console.log(tree);
}

function Tree() {
  this.root = null;
}

Tree.prototype.traverse

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if(this.root === null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
}

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function(n) {
  if(n.value < this.value) {
    if(this.left === null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if(n.value > this.value) {
    if(this.right === null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
}
