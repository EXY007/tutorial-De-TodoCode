var contador  = 0;

while(contador<10)
{
 console.log("estoy en la vuelta: "+ contador);
 contador++;   
}

console.log("--------------------")

for(var i=0;i<10;i++)
{
    console.log("vuelta numero "+i)
}

console.log("--------------------")

/* si pongo cero en contador2, me hace las 10 vueltas
si le pongo un 33, me imprime solamente el 33*/
var contador2 = 33;
do{
 console.log("vueta do while numero "+ contador2)
 contador2++;
}
while(contador2<10)


console.log("----------Cuenta regresiva----------")
for(var d=10; d>0; d--)
{
    console.log(d)
}
console.log("feliz año!");





