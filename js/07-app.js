// 7. for ....of
// for of itera sobre Arreglos
const pendientes = ['Primero', 'Segundo', 'Terceo', 'Cuarto', 'Quinto'];

const multiples = [
    { nombre: 'monitor', precio: 53200 },
    { nombre: 'TV', precio: 32500 },
    { nombre: 'LCD', precio: 37500 },
    { nombre: 'LED', precio: 57800 },
    { nombre: 'Audifonos', precio: 59300 },
    { nombre: 'Parlantes', precio: 53200 },
    { nombre: 'celular', precio: 50380 },
];

// Recorrer arreglo tradicional con for of.
// Cada dato del arreglo se debe dar un nombre (iterator)
// of nombreObjeto en este caso pendientes
for (const iterator of pendientes) {
    console.log(iterator);
}

// Recorrer un arreglo de objetos
for (const producto of multiples) {
    console.log(producto);//nos da acceso a cada uno de los objetos

    console.log(producto.nombre);//accede al nombre
}