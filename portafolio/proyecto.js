//funcion de arraque  del programa
function main( ) { 

showmessage();
asistencefundation("saturday");
personalizedmessage("Santi", "quindio")
}

// funion codigo que se va a reutilizar
function showmessage() {
    //codigo a ejecutar 
    console.log("Hola a todos en el mundo");

}

//funcion personalizada
function personalizedmessage(name, address) {
    let message = "hola soy " + name + ", vivo en "+ address;
console.log(message);

}


function asistencefundation(dayweek) {
 if(dayweek === 'saturday') {

    console.log("asistir fundacion")

 } 
 else {
    console.log("no asustes ese dia")
 }
}
main();
