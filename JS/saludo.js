//alert("Hola Mundo con JavaScript" );

var nombre = "Fernando";
var edad = 30;
var estatura = 1.7;
var casado = false;
var lInicial = "L";

console.log("nombre es "+nombre+" "+typeof nombre)
console.log("edad es "+edad+" "+typeof edad)
console.log("estatura es "+" "+estatura+ typeof estatura)
console.log("casado "+casado+" "+ typeof casado)
console.log("lInicial "+lInicial+" "+ typeof lInicial)


if(true)
{
    let nom2="Fernando";
    console.log("Luis "+nom2);
}
//la linea de abajo no me muestra el error en vsc pero el navegador 
//si me da el error
//console.log("Luis "+nom2+" fuera del if");

const correo = "LuisFernandoMedina@gmail.com";
console.log(correo)

//no me da el error el vsc pero el navegador si
//no puedo cambiarle el valor a correo porque es let
/*
correo = "otrocorreo";
console.log(correo)
*/


if (true)
{
const nom3 = ("nombre3")
console.log(nom3);
}
//el const no me deja sacarlo de las {} asi como let
//console.log(nom3);
//--MODULO O RESTO PARA SABER SI ES PAR O INPAR
var resto1 = 13%2;
console.log(resto1);

if(edad%2 == 1)
{
console.log("mi edad es impar")
}
else{
    console.log("mi edad es par")
}


var color = prompt ("ingrese el color")
switch(color)
{
case "rojo": console.log("el color es rojo"); 
break;
case "azul": console.log("el color es azul"); 
break;
case "amarillo": console.log("el color es amarillo"); 
break;
case "20" : console.log("ingresaste el numero 20");
break
//aqui esta el default de switch
default : console.log("el color ingresado no es valido") 
break;
}








