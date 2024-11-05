console.log("javohir")

// 1.polimorfizm
class Hayvonlar {
    farqi() {
        console.log("farqlari pasta keltirilgan")
    }
}

class Yolbars extends Hayvonlar {
    farqi() {
        const yolbars = `
        1. go'shxor
        2. mushuklar oilasiga kiradi
        3. vazn 100-200 kg
        4. o'rmonlarda yashaydi
        5. bir ozi yolg'iz yuradi
        `
        return yolbars
    }
}

class Fil extends Hayvonlar {
    farqi() {
        const fil = `
        1. o'thor
        2. vazn 2-7 tonnagacha
        3. afrika da yashaydi
        4. gurux bolib yashashadi
        `
        return fil
    }
}


console.log("Yolbars 🐅: ", new Yolbars().farqi())
console.log("Fil : 🐘", new Fil().farqi())



console.log("----------------------------------------")
// 2.polimorfizm

class Oyinlar {
    malumotlar() {
        console.log("2 xil o'yin ning malumoti")
    }
}

class Pubg extends Oyinlar{
    malumotlar(){
        return `
        1. mobile oyin
        2. faqat 4 kishi oynay oladi
        3. internetli oyin  
        4. davomiy vaqt 30-35 daqiqa
        `
    }
}

class CSGO extends Oyinlar{
    malumotlar(){
        return `
        1. konpyuter da oynaladi
        2. 2 ta jamoa boladi odam soni cheagaralanmagan hohlagancha
        3. internetsiz oynasa ham boladi
        4. davomiy vaqt cheksiz
        `
    }
}

const pubg_game = new Pubg()
const csgo_game = new CSGO()
console.log("Pubg game 🎮: ", pubg_game.malumotlar())
console.log("CSGO game 🎮: ", csgo_game.malumotlar())



















// display-xossalari

const body = document.getElementById("body") // html papkada body tegiga id siga body berib qoyilsa boldi
const div_tag = document.createElement("div")
const block_one = document.createElement("div")
const block_two = document.createElement("div")
const block_three = document.createElement("div")
const block_four = document.createElement("div")
const button = document.createElement("button")
button.textContent = "bosing"

body.style = "width:100%; height:100vh; background-color: black; display:flex; align-items: center; justify-content: center;"
div_tag.style = "width:700px; height:400px; background-color: blueviolet; display:flex; align-items: center; justify-content:space-evenly;"
block_one.style = "width:100px; height:220px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_two.style = "width:100px; height:300px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_three.style = "width:100px; height:100px; background-color: orange; border-radius: 20px; border:2px solid black;"
block_four.style = "width:100px; height:200px; background-color: orange; border-radius: 20px; border:2px solid black;"
button.style = "width:200px; height:30px; margin-left:20px;"


body.appendChild(div_tag)
body.appendChild(button)
div_tag.appendChild(block_one)
div_tag.appendChild(block_two)
div_tag.appendChild(block_three)
div_tag.appendChild(block_four)

button.addEventListener("click", ()=>{
    if (div_tag.style.display === 'none') {
        div_tag.style.display = 'flex';
    } else {
        div_tag.style.display = 'none';
    }
})