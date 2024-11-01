console.log("Jasurbek");

// 1

function greet(person) {
  if (typeof person === "string") {
    console.log(`Hello, ${person}!`);
  } else if (person instanceof Array) {
    console.log(`Hello, ${person.join(", ")}!`);
  } else {
    console.log("Hello, friend!");
  }
}

greet("Jasurbek");
greet(["Mirjalol", "Rustam"]);
greet();

// 2

class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
