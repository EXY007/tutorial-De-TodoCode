

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

//sub-string ((creo que como slice pero)unicamente cadena de caractenes)

let frase4 = "mi nombre es luis medina"
let framento4 = frase4.substring(13,18);
console.log(framento);


//pasar todo a mayuscula //pasar todo a minuscula
let frase5 = "Luis Medina"
let mayus = frase5.toUpperCase();
let minus = frase5.toLowerCase();
console.log(mayus);
console.log(minus);


//buscar el indice de una palabara
let frase6 = "hola mucho gusto, mi nobre es juan";
let posicion = frase6.indexOf("mi");
console.log(posicion);
//sino encuentra me da -1(tendria que poner un uf si se necesita)

//includes; pregunta si inclulle una frase, si esta nos retorta un true
let frase7 = "hola mucho gusto, mi nombre es juan";
console.log(frase7.includes("nombre es"));


function fnCambiarColor() {
    let parrafo = document.getElementById("miTexto");
    parrafo.textContent = "EL TEXTO CAMBIO";
    parrafo.style.color="red"

    
    const nuevoElemento = document.createElement("div");
    nuevoElemento.textContent = "Nuevo elemento agregado";
    document.body.appendChild(nuevoElemento);
    nuevoElemento.style.color="red"

}







//si lo quisier sin el onclick en el html seria 
//el sig script

/*
<script>
    // Espera a que se cargue el DOM
    document.addEventListener("DOMContentLoaded", function() {
        // Obtén el botón por su ID
        const boton = document.getElementById("botonCambiar");

        // Agrega un escuchador de clic al botón
        boton.addEventListener("click", function() {
            // Cambia el texto del párrafo
            const parrafo = document.getElementById("miTexto");
            parrafo.textContent = "EL TEXTO CAMBIÓ"; // Corregí la palabra "CAMBIO" a "CAMBIÓ"
        });
    });
</script> 
*/












