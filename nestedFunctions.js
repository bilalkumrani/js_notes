let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// this is the example of lexical scoping
// the outer js variable will be accessble to ther inner functions
// js checks for variables from inside to upper level.
