class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    // write your add method here
    add(element) {
        if(!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }
    // write your remove method here
    remove(element) {
        if(this.has(element)) {
            let index = this.collection.indexOf(element);
            this.collection.splice(index, 1)
            return true;
        }
        return false;
    }
    // write your size method here
    size() {
        return this.collection.length;
    }
    // change code above this line
    union(set) {
        var union = new Set();
        var firstSet = this.values();
        var secondSet = set.values();
        firstSet.forEach(element => union.add(element));
        secondSet.forEach(element => union.add(element));
        return union;
    }
    intersection(set) {
        var intersection = new Set();
        var firstSet = this.values();
        firstSet.forEach(element => {
            if(set.has(element)) {
                intersection.add(element)
            }
        });
        return intersection;
    }
    difference(set) {
        var difference = new Set();
        var firstSet = this.values();
        firstSet.forEach(element => {
            if(!set.has(element)) {
                difference.add(element)
            }
        });
        return difference;
    }
    subset(set) {
        var firstSet = this.values();
        return firstSet.every(value => {
            return set.has(value)
        })
    }
}

/*

1. Data Structures: Create a Set Class

In this exercise we are going to create a class named Set to emulate an abstract data structure called "set". A set is like an array, but it cannot contain duplicate values. The typical use for a set is to simply check for the presence of an item. We can see how ES6 set object works in the example below-

const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false

First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set. Then we will create a remove method that removes a value from the set collection if it already exists. And finally, we will create a size method that returns the number of elements inside the set collection.

Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise.

Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true. Otherwise, it should return false. Create a size method that returns the size of the set collection.


2. Data Structures: Perform a Union on Two Sets

In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union. This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].



3. Data Structures: Perform a Difference on Two Sets of Data

In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our Set data structure called difference. A difference of sets should compare two sets and return the items present in the first set that are absent in the second. This method should take another Set as an argument and return the difference of the two sets.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference of setA and setB is: setA.difference(setB) = ['c'].

*/