console.log("ok");
console.log(7 + 7);
console.log("Bekzod");

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
