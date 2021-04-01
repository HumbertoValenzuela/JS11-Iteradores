// 1. For Loop
//Tiene 3 partes. Iniciador; Condición; El incremento
for (let index = 0; index < 10; index++) {
    const element = `Numero ${index}`;
    console.log(element);
}

// Incremento de 2 en 2
for (let index1 = 0; index1 < 10; index1 += 2) {
    const elemento = `Numero ${index1}`;
    console.log(elemento);
}

// numero impar y numero par
 for (let index2 = 0; index2 < 10; index2++) {     
     if(index2 % 2 === 0) {
        console.log(`El numero ${index2} es Par`);
       } else {
           console.log(`El numero ${index2} es Impar`);
       }     
 }

//  if Ternario
 for (let index3 = 0; index3 < 10; index3++) {   
    index3 % 2 === 0 ? console.log(`Ternario El numero ${index3} es Par`) : console.log(`Ternario El numero ${index3} es Impar`);
 }
 

//  recorrer un arreglo de objetos
const carrito = [
    {nombre: 'Monito', precio: 100},
    {nombre: 'Television', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 500},
    {nombre: 'Celular', precio: 600},    
]
//  recorrer un arreglo de objetos
console.log(carrito.length);
for (let index4 = 0; index4 < carrito.length; index4++) {
    const elemento4 = carrito[index4].nombre;
    const elemento5 = carrito[index4].precio;
    const elemento6 = carrito[index4];
    console.table(elemento4, elemento5, elemento6);    
}
 