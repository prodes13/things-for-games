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
    insert(index, val) {
      // with !! we are converting to a boolean, and returning one
      if(index<0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);
      if(index === 0) return !!this.unshift(val);
      var prev = this.get(index-1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
    // remove and element
    remove(index) {
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length-1) return this.pop();
      var prevNode = this.get(index - 1);
      var removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed;
    }
    reverse() {
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i=0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    // printing as an array
    print() {
      var arr = [];
      var current = this.head;
      while(current) {
        arr.push(current.val);
        current = current.next;
      }
      console.log(arr);
    }
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
list.push("1");
list.push("2")
list.push("3")
list.push("4")
list.push("5")
console.log(list)
console.log(list.length)

console.log("Normal ",list.traverse())
console.log("Reversed ",list.reverse())
list.pop();
// var first = new Node("hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you?");
