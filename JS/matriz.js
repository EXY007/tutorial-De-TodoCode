let miVector= [1,2,3,4,5]
console.log(miVector)

for(let i=0; i<miVector.length;i++)
{
    console.log("numero: "+miVector[i])

}
console.log("-------------")

let miMatriz = [[1,2,3],[4,5,6],[7,8,9]]

console.log("mi matriz es: "+miMatriz)

console.log (miMatriz[1][1])

console.log("----crear vector-------")
let vectr = new Array(3) //Array verde aqui es una clase(El 3 poco sirve)
vectr[0]= "Luis"
vectr[1]= "Fernando"
vectr[2]="Medina"
vectr[3]="Aguilera"
console.log(vectr)




let Matrz = new Array(3);

for(let i=0;i<3;i++)
{
    Matrz[i] = new Array(3);
}

console.log(Matrz)


console.log("----crear Matriz con Vectores-------")

let vec1 = ["luis","Fernando","Medina"]
let vec2 = ["luis1","Fernando1","Medina1"]
let vec3 = ["luis2","Fernando2","Medina2"]

let vec4 = ["luis3","Fernando3","Medina3"]


let Matrz2 = [vec1,vec2,vec3,vec4]
console.log(Matrz2)
console.log(Matrz2[2][1])//se comienza desde cero,[2][1] aqui me da Fernando2

//Recorrer matriz

console.log("----------")
console.log("----------")
for (let f=0; f<Matrz2.length;f++)//toma la longitud del mayor
{

    for (let c=0; c<Matrz2[f].length;c++)
    {
        console.log(Matrz2[f][c])

    }


}

console.log(Matrz2.length)//nos da el numero de







