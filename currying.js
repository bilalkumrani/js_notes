// FUNTION CURRYING
/*
    currying is a process in functional programming in which we transform 
    a function with multiple arguments into a sequence of nesting functions 
    that take one argument at a time.

    function(a,b,c)  --> function(a)(b)(c)

*/

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

// sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(4));
