class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // because of return, we don't need else
  insert(value) {
    var newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          } // because of return, we don't need else
        } else if(value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if(this.root === null) return false;
    var current = this.root,
        found = false;
    while(current && !found) {
      if(value < current.value) {
        current = current.lef;
      } else if(value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return false;
    return current;
  }
  // BREATH FIRST SEARCH
  BFS() {
    var data = [],
        queue = [],
        node = this.root;

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);

    }
    return data;
  }
  // DEPTH FIRST SEARCH -- PreOrder
  DFSPreOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
