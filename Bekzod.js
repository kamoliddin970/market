console.log("Bekzod");

// Uy vazifalari
// 1-misol
function introduce(person) {
  console.log(
    `Salom, men ${person.getName()} va men ${person.getAge()} yoshdaman.`
  );
}

const student = {
  getName: function () {
    return "Bekzod";
  },
  getAge: function () {
    return 20;
  },
};

const teacher = {
  getName: function () {
    return "Madina";
  },
  getAge: function () {
    return 35;
  },
};

introduce(student);
introduce(teacher);
// 2-misol

function Person() {}
Person.prototype.speak = function () {
  console.log("Men oddiy insonman.");
};

function Student() {}
Student.prototype = Object.create(Person.prototype);
Student.prototype.speak = function () {
  console.log("Men talabaman.");
};

function Teacher() {}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.speak = function () {
  console.log("Men o'qituvchiman.");
};

const people = [new Person(), new Student(), new Teacher()];

people.forEach((person) => {
  person.speak();
});
