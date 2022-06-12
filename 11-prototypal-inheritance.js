// prototypal pattren
// human is created it has some of its properties
var human = {
  species: "Human",
  saySpecies: function () {
    console.log(this.species);
  },
};
// programmer is created from human and it has access to human's properties
var programmer = Object.create(human);
programmer.languages = "javascript, cpp";

//bilal is created from programmer and bilal has all the properties o f programmer
var bilal = Object.create(programmer);
bilal.name = "bilal";

// this is how prototypal inheritance work in javascript
