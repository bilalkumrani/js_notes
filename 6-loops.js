/*
while
do..while
for
for...of
for...in
foreach
*/

//FOR..OF
let x = ["apple", "orange", "carrot", "banana"];

for (fruit of x) {
  console.log(fruit);
}

//FOR..IN
let obj = {
  firstName: "bilal",
  lastName: "Khan",
  country: "pakistan",
};

for (data in obj) {
  console.log(obj[data]);
}

//FOREACH
// used for arrays
x.forEach((val) => [console.log("each loop: ", val)]);
