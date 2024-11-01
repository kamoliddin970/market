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