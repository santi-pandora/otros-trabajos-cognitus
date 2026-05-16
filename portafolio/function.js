///funcion  que reciba 2 numerls y retorne la suma
//funcion peibcipal para ejecutar la suma

function  main() {
// se llama funcion numeros para sumar
    plusnumbers(78,34);
    plusnumbers(8,34);

}
//se crea funcion suma
function plusnumbers(n1,n2) {
    //operacion suma
let n3 = n1+n2;
//se imprime resultado
console.log("la suma entre numero 1 que es: " +n1 + " y numero 2 que es: " + n2 +" esto es igual al numero: " + n3);

}
//seconvoca funcion principal

main();