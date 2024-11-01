console.log("muhammadaziz");
console.log("muhammadaziz");
class Car {
    constructor(engine,type) {
        this.engine=engine
        this.type=type
    }
}
class Sedan extends Car {
    constructor(engine,type,price) {
        super(engine,type)
        this.price=price
    }
}
class Microvan extends Car{
    constructor(engine,type,forWhat){
        super(engine,type)
        this.forWhat=forWhat
    }
}
class Suv extends Car{
    constructor(engine,type,color){
        super(engine,type)
        this.color=color
    }
}

const cadillac=new Suv("engine:6.2 l", "type:SUV","color:black")
const damas=new Microvan("engine:0.8 l","type:MICROVAN","priority:the uses for damas is for everything")
const nexia=new Sedan("engine:1.6 l", "type:SEDAN", "price:6000$")
const vaz2107=new Car("engine: 1.5 l", "type: SEDAN")

console.log(cadillac);
console.log(damas);
console.log(nexia);
console.log(vaz2107);
