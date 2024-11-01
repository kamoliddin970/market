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

// javohir

<<<<<<< HEAD
const javohirCloses = ()=>{
  let i = 1
  return ()=>{
    return i++
  }
}
const javohir = javohirCloses()
console.log(javohir())
console.log(javohir())
console.log(javohir())
console.log(javohir())
console.log(javohir())
console.log(javohir())
console.log(javohir())
=======
const arr = [];
function javohir() {
  arr.push(javohir);
  console.log(arr.length);
}
javohir();
javohir();
javohir();
javohir();
javohir();
javohir();
>>>>>>> c833a7d26aa0b8444cdf6e676d6c1a4c2ed870ba

// kamoliddin's closure function

const kamoliddinClosure = () => {
  let i = 0;

  return () => {
    return ++i;
  };
};

const kamoliddin = kamoliddinClosure();

console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
console.log(kamoliddin());
