// In JavaScript, a closure is a function that references variables in the outer scope from
// its inner scope. The closure preserves the outer scope inside its inner scope. To understand the
// closures, you need to know how the lexical scoping works first.

// lexical scoping
// According to lexical scoping, the scopes can
// be nested and the inner function can access the variables declared in its outer scope

function greeting() {
  let message = "Hi";

  function sayHi() {
    console.log(message);
  }

  return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable

// In JavaScript, closures are the primary mechanism used to enable data
// privacy. When you use closures for data privacy, the enclosed variables are only in scope within the
// containing (outer) function. You can't get at the data from an outside scope
// except through the object's privileged methods.
