console.log("Bilol");
class Employee {
  getSalary() {
    console.log("Xodimning maoshi aniqlandi.");
  }
}

class Manager extends Employee {
  getSalary() {
    console.log("Menejerning maoshi: 5000$");
  }
}

class Developer extends Employee {
  getSalary() {
    console.log("Dasturchining maoshi: 4000$");
  }
}

class Designer extends Employee {
  getSalary() {
    console.log("Dizaynerning maoshi: 3000$");
  }
}

let xodimlar = [new Manager(), new Developer(), new Designer()];
xodimlar.forEach((xodim) => xodim.getSalary());
