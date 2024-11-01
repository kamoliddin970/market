console.log("Bekmuhammad");



// TATU student panel
class TATU {
    getStudent(){
        return "TATU ning jami talabalar soni 10000 ta"
    }
}
class Axborotxavfsizligi extends TATU {
    getStudent(){
         return "Axborot xavsizligi jami talabalari soni 1000 ta"
    }
}
class Kiberxavfsizligi extends TATU {
    getStudent(){
         return "Kiber xavfsizligi  jami talabalari soni 1000 ta"
    }
}
class Dasduriyinjinering extends TATU {
    getStudent(){
         return "Dasduriy injinering jami talabalari soni 1000 ta"
    }
}
class Kompyuterinjinering extends TATU {
    getStudent(){
         return "Kompyuter injinering jami talabalari soni 1000 ta"
    }
}
class Simsizaloqa extends TATU {
    getStudent(){
         return "Simsiz aloqa jami talabalari soni 1000 ta"
    }
}
class Telekommunikatsiyatexnologiyalarifakulteti extends TATU {
    getStudent(){
         return "Telekommunikatsiya texnologiyalari fakulteti jami talabalari soni 1000 ta"
    }
}
class Televiziontexnologiyalar extends TATU {
    getStudent(){
         return "Televiziontexnologiyalar jami talabalari soni 1000 ta"
    }
}
class sirtqi_talim extends TATU{
    getStudent(){
        return " Sirtqi talim talabalari soni 3000ta"
    }
}
console.log(new TATU().getStudent());

console.log(new Axborotxavfsizligi().getStudent());
console.log(new Kiberxavfsizligi().getStudent());
console.log(new Dasduriyinjinering().getStudent());
console.log(new Kompyuterinjinering().getStudent());
console.log(new Simsizaloqa().getStudent());
console.log(new Telekommunikatsiyatexnologiyalarifakulteti().getStudent());
console.log(new Televiziontexnologiyalar().getStudent());
console.log(new sirtqi_talim().getStudent());




///////////////////////////////////////////////////////////////////////////////////
//Dasturlash tili

class Dastur  {
    getone(){
        return "  Dasturlash yonalishlari"
    }
    getOwner(){
        return " Devoloper => Khamidov "
    }
}

class BackEnd extends Dastur{
    getone(){
        return " BackEnd Dasturning ichki qismi yonalishi"
    }
}
class FrontEnd extends Dastur{
    getone(){
        return " FrontEnd Dasturning tashqi qismi yonalishi"
    }
}
class NodeJS extends BackEnd{
    getone(){
        return "NodeJS Dasturning ichki qismi uchun"
    }
}
class Pyhton extends BackEnd{
    getone(){
        return "Pyhton Dasturning ichki qismi uchun"
    }
}
class ReactJS extends FrontEnd{
    getone(){
        return "ReactJS Dasturning tashqi qismi uchun"
    }
}
class ValueJS extends FrontEnd{
    getone(){
        return "ValueJS Dasturning tashqi qismi uchun"
    }
}

console.log(new Dastur().getone());
console.log(new BackEnd().getone());
console.log(new FrontEnd().getone());
console.log(new NodeJS().getone());
console.log(new Pyhton().getone());
console.log(new ReactJS().getone());
console.log(new ValueJS().getone());

console.log(new Dastur().getOwner());

