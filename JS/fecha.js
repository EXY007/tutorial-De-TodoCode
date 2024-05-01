var fecha = new Date(); //llamado a unconstructor (new date()) (date es una clase)
alert("la fecha de hoy es "+ fecha );

var miFecha = new Date(1995,3,28);//este const comienza los meces desde cero
alert("mi umpleaños1 es"+ miFecha);

var fecha2 = new Date("04/25/2023");//este constructor toma los numeros tal cual lo ponemos
alert("mi umpleaños es"+ fecha2);


//un mensaje separado para el mes, dia, año
//funciones especiales

var diadelMes = miFecha.getDate();
var diaDeLaSemana = miFecha.getDay();
var mes = miFecha.getMonth();
var año = miFecha.getFullYear();

console.log(diaDeLaSemana)
console.log(diadelMes)

//aqui ya el mes no comienza desde cero, comienza como se escribe asi que me da 3
console.log((mes+1))

console.log(año)
console.log("-------------------")

//EJERCICIO INGRESAR MEDIANTE UN PROMP
//UNA FECHA formato: MES/DIA/AÑO LUEGO MEDIANTE UN ALERT
//MOSTRAR (alert) A QUE DIA DE LA SEMANA CORRESPONDE

/*--prompt devuelve una cadena de texto (string), por lo que
 necesitas convertirlo a
 un objeto de fecha antes de obtener el día de la semana.
  --El método correcto para obtener el día de la semana es getDay(), pero
 debes aplicarlo a un objeto de fecha, no a una cadena.*/

var miDia =  prompt ("ingrese la fecha", "mes/dia/año")

var fecha3 = new Date(miDia)

var numdia = fecha3.getDay()


switch (numdia)
{
    case 0: alert("Domingo");
    break;
    case 1: alert("Luines");
    break;
    case 2: alert("Martes");
    break;
    case 3: alert("Miercoles");
    break;
    case 4: alert("Jueves");
    break;
    case 5: alert("Viernes");
    break;
    case 6: alert("Sabado");
    break;
}

console.log(numdia)




