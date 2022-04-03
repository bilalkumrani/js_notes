// closure is the combination of a function bundled together with refrences to its surrounding state.
// closures are created everytime function is created

//as we saw in nested functions they have access to the variables which are defined
// in their own scope and in outer scope

//WORKING OF NESTED FUNCTION
function outer() {
  let counter = 0;

  function inner() {
    counter += 1;
    console.log(counter);
  }
  inner();
}
outer(); // prints 1
outer(); // prints 1
// because everytime new memory stablished and it is temporary

// in js we can return the function so we can store its refrence and call it later.

// WORKING OF CLOSURES IN JS
function outer1() {
  let counter = 0;

  function inner1() {
    counter += 1;
    console.log(counter);
  }
  return inner1;
}

const latercall = outer1();

// now if we call lastcall function twice it will print 1 and 2

latercall(); // 1
latercall(); // 2

// EASY DEFINATION OF CLOSURES:
/*
    in js when we return a funtion from another function, 
    we are effectively returning a combination of function defination along with the
    function's scope. this would let the function defination have an associated 
    persistent memory which could hold onto live data between executions. that combination of 
    the function and its scope chain is what is called closures in js.
*/
