let frutas = ["naranja","manzana","sandilla","kiwi","zapote","almendra"]
let frutas2 = ["naranja2","manzana2","sandilla2","kiwi2"]
console.log(frutas)

//agrego por la derecha
frutas.push("pera")
console.log(frutas)

//elimino por la derecha
frutas.pop()
console.log(frutas)

//eliminar por la izquierda
frutas.shift()
console.log(frutas)
//agrego por la izquierda
frutas.unshift("mango")

//FILTRO(establecer condicion que queremos filtrar)

let FrutasConA = frutas.filter(fruta => fruta.includes("a") )
console.log(FrutasConA)

//concatenar 2 vectores
let todasFrutas = frutas.concat(frutas2)
console.log(todasFrutas)

//revertir orden
todasFrutas.reverse()
console.log(todasFrutas)

//ordenar alfaveticamente
todasFrutas.sort();
console.log(todasFrutas)


