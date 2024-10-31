console.log("Bilol");
//--------------------------------------------
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
//-----------------------------------------------------
class Laptop {
  getPrice() {
    console.log("Noutbukning narxi hisoblanmoqda...");
  }
}

class GamingLaptop extends Laptop {
  getPrice() {
    console.log("gaming noutbuk: 1500$");
  }
}

class BusinessLaptop extends Laptop {
  getPrice() {
    console.log("business noutbuk: 1200$");
  }
}

class StudentLaptop extends Laptop {
  getPrice() {
    console.log("Student laptop: 300$");
  }
}

let laptops = [new GamingLaptop(), new BusinessLaptop(), new StudentLaptop()];
laptops.forEach((laptop) => laptop.getPrice());
