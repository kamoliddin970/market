console.log("ok");
console.log(7 + 7);
console.log("Bekzod");

function double(n) {
  return n * 2;
}

console.log(double(7));

// 1-misol

class Hayvon {
  speak() {
    console.log("Hayvon ovoz chiqardi.");
  }
}

class dog extends Hayvon {
  speak() {
    console.log("Vov-vov!");
  }
}

class cat extends Hayvon {
  speak() {
    console.log("Miyov!");
  }
}

const it = new dog();
const mushuk = new cat();

it.speak();
mushuk.speak();

// 2-misol

class Ticket {
  getTicket() {
    return 500000;
  }
}
class oldiQator extends Ticket {}
class ortaQator extends Ticket {
  getTicket() {
    return 300000;
  }
}
class Balcon extends Ticket {
  getTicket() {
    return 100000;
  }
}
const oldi = new oldiQator();
const orta = new ortaQator();
const balcon = new Balcon();

console.log(oldi.getTicket());
console.log(orta.getTicket());
console.log(balcon.getTicket());

const jasurbekClosure = () => {
  let i = 0;

  return () => {
    return ++i;
  };
};

const jasurbek = jasurbekClosure();

console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
console.log(jasurbek());
