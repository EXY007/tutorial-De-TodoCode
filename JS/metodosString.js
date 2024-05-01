//lengt es propiedad, no metodo

let Frase="hola mundo"
let longFrase = Frase.length;
console.log("la frase tiene "+longFrase+" caracteres")


//slice(cadena de caracteres y tambien Array)
let frase2 = "mi nombre es luis medina"
let framento = frase2.slice(13,18);
console.log(framento);

//split
let frase3 = "mi, nombre, es, luis, medina"
console.log("mi frase original: "+frase3)
let miLista = frase3.split(",")
console.log(miLista);

//sub-string (unicamente cadena de caractenes)

let frase4 = "mi nombre es luis medina"
let framento4 = frase4.substring(13,18);
console.log(framento);
