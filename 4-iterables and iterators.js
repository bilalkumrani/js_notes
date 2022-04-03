//iteration in js

//string
const name = "Bilal";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

//array
const arr = ["B", "I", "L", "A", "L"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*
 1- difficulty in accessing the element
 2- defficult to manage the iteration on the data for various types of datastructures



 there was a need to iterate over various data structures in a new way that abstract away the 
 complexity of accessing elements one by one and was at the same time uniform accross the
 different data structures.
*/

//  ITERABLES AND ITERATORS PROTOCOLS

/*
iterable:
  An object that implements iterable protocol is called iterable

  Iterable protocol:
  For an object to be an iterable it must implement a method at the key [symbol.iterator]
  that method should not accept any argument and should return an object which conforms to
  the iterable protocol.

  the iterator protocol decides wether an object is an iterator.
  the object must have a next() method that returns an object with two properties 
  value: which gives the current element 
  done: which is boolean value indicating wether or not there are any more elements 
  that could be iterated upon.
*/

//IMPLEMENTATION
// will resume here
