// 8. for ...in
// for in Itera sobre Objetos

const pendientes = ['Primero', 'Segundo', 'Terceo', 'Cuarto', 'Quinto'];
// En un arreglo tradicional for in recorre los índices
for (const key in pendientes) {
    console.log(key);
}


const automovil = {
    modelo: 'Toyota',
    año: '2010',
    motor: '1.6'
}
// En un objeto for in va iterar sobre un Objeto. 
for (const propiedad in automovil) {
    console.log(propiedad);//Muestra las key, no los valores
    console.log(`Valores ${automovil[propiedad]}`);// los valores
}

// nuevo iterador para objetos lanzado con ECMAScript7
// otra forma para iterar sobre los valores de un objeto
for( let [llave, valor] of Object.entries(automovil)) {
    console.log(valor); //los valores
    console.log(llave); // las key
}


