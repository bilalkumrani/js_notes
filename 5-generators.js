function normalFunction() {
  console.log("hello");
  console.log("world");
}

normalFunction();

//generator function is that can stop mid way
// or we can say genereator function can pause execution

function* generatorFunction() {
  yield "hello";
  yield "world";
}

const genObj = generatorFunction();
// it returns generator object which is iterator so we can use
// for of loop with genObj

for (const word of genObj) {
  console.log(word);
}
