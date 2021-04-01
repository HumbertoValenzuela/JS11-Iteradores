// 6. .forEach y .map

// foreach se ejecutará al menos una vez, por cada vez que halla elementos en el arreglo
const pendientes = ['Primero', 'Segundo', 'Terceo', 'Cuarto', 'Quinto'];

// Como foreach está diseñado para recorrer arreglos
// en los parametros al colocar una , te va a mostrar el índice
pendientes.forEach( (pendie, indice) =>
    console.log(`${pendie} - ${indice}`) )


const multiples = [
    { nombre: 'monitor', precio: 53200 },
    { nombre: 'TV', precio: 32500 },
    { nombre: 'LCD', precio: 37500 },
    { nombre: 'LED', precio: 57800 },
    { nombre: 'Audifonos', precio: 59300 },
    { nombre: 'Parlantes', precio: 53200 },
    { nombre: 'celular', precio: 50380 },
];

multiples.forEach( (productos, indice) => {
    console.log(`foreach ${indice} ${productos.nombre} y ${productos.precio}`);
    console.log(productos);
})

// map crea un arreglo nuevo
multiples.map( (productos, indice) => {
    console.log(`map ${indice} ${productos.nombre}`);    
})
// map crea un arreglo nuevo
const nuevoarreglo = multiples.map( (productos) => {
    return `nuevo arreglo map ${productos.nombre}`;    
})
console.table(nuevoarreglo);