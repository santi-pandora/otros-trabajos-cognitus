// valor de n
let n = 8;
//se tranforma enn en asterisco
let as ="";
//se recorre n segun el valor de la cantidad del valor de este mismo n
for (let i = 1; i < n; i++) {
    //se recorre j para poder que los asteriscps quecen en diagonal
for (let j = 1; j < n; j++) {
    //si i==j
if (i == j) {
    //se agrega asteriaco
as += '*';
//si no se agrega el espacio en blanco
}else{ 
as += '   ';
}   
}
//se hace el sañtode linea
as += "\n"
}
//se imprime los asteriscps diagonales
console.log(as);
