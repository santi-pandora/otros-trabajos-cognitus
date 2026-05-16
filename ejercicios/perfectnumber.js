let pn =6;
//se crea un arreglo vacio
const div =[];
for (let i = 1;i < pn; i++) {
    //se hace la division para sacar los numeros divisores de pn menos pn mismo
    if (pn % i ===0) {
        div.push(i)
//se insertan en pn
    }
 

 } console.log(div);

 //se recorre div menosel ultimo numero
    const ultimon = div[div.length -1];
    //si el ultimo elemento es igual a pn 
    if(ultimon === pn) {
        //sale este mensaje
        console.log(pn + " no es un numero perfecto");
//si no sale otro mensae como:
        
    }else {
        console.log( pn+" es un numero perfecto");
        
    } 


