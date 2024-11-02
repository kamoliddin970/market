console.log("ok");
console.log(7 + 7);
console.log("Bekzod");





const Bekmuhammad = ()=>{
    i=0
    return ()=>{
        return ++i
    }
}
const chaqiruv = Bekmuhammad();
console.log(chaqiruv());

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

//Muhammadaziz's closure function
function muhammadazizClosure() {
  let a=0
  function multiply(params) {
    return ++a
  }
  return multiply
}
const muhammadaziz23=muhammadazizClosure()
console.log(muhammadaziz23())
console.log(muhammadaziz23())
console.log(muhammadaziz23())
console.log(muhammadaziz23())

///i changed, bro🗿🗿🗿. don't be upset
const bilolClosure = () => {
  let i = 0;

  return () => {
    return ++i;
  };
};

const bilol = bilolClosure();

console.log(bilol());
console.log(bilol());


//ziyodillo
function ziyodillo() {
  let son = 0;
  return function () {
    return son++;
  };
}

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
const kamoliddin=kamoliddinClosure()

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

//const double = Bekzod(2); i commentearied it cuz it used twice and it's a bug🗿
const triple = Bekzod(3);

console.log(double(5));
console.log(triple(5));

//men bir🗿🗿🗿 it's a recursion to create nickname for me
function muhammad2() {
  let yU=23
  return ()=>{
    return `@muhammadaziz${+yU+ "_yuldashev"}`
  }
}
const muhammadazz=muhammad2()
console.log("that is for homework:",muhammadazz());//enough for today

//Abror
function logAbror(count) {
  
  if (count <= 0) {
      return; 
  }
  
  console.log("Abror");
  logAbror(count - 1);
}


logAbror(1);


// men 4🗿

function ten_name(name, count = 10) {
  if (count == 0) {
      return
  }
  console.log(name)
  ten_name(name, count - 1)
}

const ism = "Javohir Yakubov"
ten_name(ism)
 
/// aaa uzr oma yana bezovta qildim😂. nma qilishdi tori tushunmabman🗿
function returnMyName(){
  let имя="Muhammadaziz"
  if (typeof(имя)!=='string') {
    return "please write only name🗿"
  }
  return ()=>{
    return имя
  }
}
const azzSResult=returnMyName()
console.log(azzSResult());   ///anyway (MEN BIR)🗿. even i got the conclusion wrongly🗿🗿🗿