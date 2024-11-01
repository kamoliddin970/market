console.log("Husniddin");


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
