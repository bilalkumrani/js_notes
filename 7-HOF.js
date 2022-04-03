//Higher order functions

//filter

const ages = [1, 2, 3, 4, 5, 6, 7, 8];
const newAges = ages.filter((age) => age >= 5);
console.log(newAges);

//map
const doubleAge = ages.map((age) => {
  return age * 2;
});
console.log("double", doubleAge);
