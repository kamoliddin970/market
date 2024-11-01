console.log("ok");
console.log(7 + 7);
console.log("Bekzod");
//Husniddin

function Husniddin() {
  let count = 0;

  function Husniddin2() {
    count++;
    console.log(count);
  }

  return Husniddin2;
}

const counter = Husniddin();
counter();
counter();
counter();

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

const bilolClosure = () => {
  let i = 0;

  return () => {
    return ++i;
  };
};

const bilol = bilolClosure();

console.log(bilol());
console.log(bilol());

function ziyodillo() {
  let son = 0;
  return function () {
    return son++;
  };
}
//ziyodillo
const son = ziyodillo();
console.log(son);
console.log(son);
console.log(son);
console.log(son);

// javohir

const javohirCloses = () => {
  let i = 1;
  return () => {
    return i++;
  };
};

const javohir = javohirCloses();
console.log(javohir());
console.log(javohir());
console.log(javohir());
console.log(javohir());
console.log(javohir());
console.log(javohir());
console.log(javohir());

// kamoliddin's closure function

const kamoliddinClosure = () => {
  let i = 0;

  return () => {
    return ++i;
  };
};

const jasurbekClosure = () => {
  let e = 0;

  return () => {
    return ++e;
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

// Bekzod

function Bekzod(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = Bekzod(2);
const triple = Bekzod(3);

console.log(double(5));
console.log(triple(5));
