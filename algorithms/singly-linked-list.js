class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SlinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adding Element at the end of an list.
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Removing elements from the end of an list
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }
    // Removing elements at the beginning of an list
    shift() {
      if(!this.head) return undefined;
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if(this.length ===0) {
          this.tail = null;
      }
      return currentHead;
    }
    // Adding elements at the front of an list
    unshift() {
      var newNode = new Node(val);
      if(!head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    // show the element at index position
    get(index) {
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      var current = this.head;
      while(counter !== index) {
        current = current.nex;
        counter++;
      }
      return current;
    }
    // take a node and update it's value
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
          foundNode.val = val;
          return true;
        }
        return false;
    }
    // inserting an element

    // listing list
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

var list = new SlinglyLinkedList();
list.push("Florin");
list.push("Ciobotaru")
console.log(list)
console.log(list.length)

console.log(list.traverse())
list.pop();
// var first = new Node("hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you?");
