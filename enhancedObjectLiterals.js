/*
Enhanced Object Literals
Objects’ properties are often created from variables with the same name. For example:


// ES5 code
var
  a = 1, b = 2, c = 3;
  obj = {
    a: a,
    b: b,
    c: c
  };

// obj.a = 1, obj.b = 2, obj.c = 3



There’s no need for nasty repetition in ES6!…

// ES6 code
const
  a = 1, b = 2, c = 3;
  obj = {
    a
    b
    c
  };

// obj.a = 1, obj.b = 2, obj.c = 3




*/
