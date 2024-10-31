console.log("Bilol");

class Laptop {
    getPrice() {
        console.log("Noutbukning narxi hisoblanmoqda...");
    }
}

class GamingLaptop extends Laptop {
    getPrice() {
        console.log("O'yin noutbuki narxi: 1500$");
    }
}

class BusinessLaptop extends Laptop {
    getPrice() {
        console.log("Biznes noutbuki narxi: 1200$");
    }
}

class Ultrabook extends Laptop {
    getPrice() {
        console.log("Ultrabuk narxi: 1000$");
    }
}

class StudentLaptop extends Laptop {
    getPrice() {
        console.log("Talaba noutbuki narxi: 700$");
    }
}

// Noutbuklarni yaratamiz va narxlarini ko'rsatamiz
let laptops = [new GamingLaptop(), new BusinessLaptop(), new Ultrabook(), new StudentLaptop()];
laptops.forEach(laptop => laptop.getPrice());
//--------------------------------------------------------------------------------------------------
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
