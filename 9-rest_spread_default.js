// default

function inc(number, increment = 1) {
  return number + increment;
}
console.log(inc(2, 2)); // 4
console.log(inc(2)); // 3

// rest (paramenter becomes array)

const sum = (...values) => {
  let allSum = 0;
  values.forEach((val) => {
    allSum += val;
  });
  return allSum;
};
console.log("sum func ", sum(1, 2, 4));

//spread
function sum(a, b, c) {
  return a + b + c;
}
var args = [1, 2, 3];
console.log(sum(...args)); // 6
