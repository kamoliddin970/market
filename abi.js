class Animal {
    constructor(type, activity) {
        this.type = type;
        this.activity = activity;
    }


    example() {
        return `${this.type} ${this.activity}.`;
    }
}


const dog = new Animal("It", "o'yin o'ynaydi");
console.log(dog.example()); 

const cat = new Animal("Mushuk", "yuvinadi");
console.log(cat.example()); 

const cow = new Animal("Sigir", "o't yiydi");
console.log(cow.example());

const bird = new Animal("Qush", "havoda uchadi");
console.log(bird.example()); 
