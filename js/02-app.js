// 2. break y continue; en un for loop

// break corta la ejecución de un foor loop
// continue intercepta un elemento, identifica y continua con la ejecución. ver ejemplos

for (let index5 = 0; index5 < 10; index5++) {
    
    if(index5 === 5) {
        console.log(`Es el numero ${index5}`);
        break; // rompe el for loop
    }
    console.log(`Es el Numero ${index5}`);
}

// el numero 5 que diga cinco con letras
for (let index6 = 0; index6 < 10; index6++) {
    
    if(index6 === 5) {
        console.log('Cinco'); 
        // continue rompe el ciclo, es decir, no ejecuta la sgte línea. pero sigue ejecutando el for
        continue;      
    }
    console.log(`Es el Numero ${index6}`);
}


const carritos1 = [
    {nombre: 'Monito', precio: 100},
    {nombre: 'Television', precio: 200},
    {nombre: 'Tablet', precio: 300, descuento: true},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 500},
    {nombre: 'Celular', precio: 600, descuento: true},    
]

for (let index6 = 0; index6 < carritos1.length; index6++) {
    
    if(carritos1[index6].descuento) {
        console.log(`El articulo ${carritos1[index6].nombre} tiene descuento`); 
        // continue rompe el ciclo, es decir, no ejecuta la sgte línea. pero sigue ejecutando el for
        continue;      
    }
    console.log(`${carritos1[index6].nombre} ${index6}`);
}