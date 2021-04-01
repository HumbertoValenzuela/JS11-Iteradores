// 3. El Ejercicio Fizz Buzz

// multiplo de 3 6 9 12 ... fizz
// multiplo 5 10 15 20 ... buzz
// multiplos de ambos 15 30 45 fizzbuzz

// no mostrar el comienzo en 0, index comienza en 1
for (let index = 1; index < 100; index++) {
    // la condición que pasa menos veces va primero
    if(index % 3 === 0 && index % 5 === 0){
        console.log(`fizzbuzz ${index}`);

        } else if(index % 3 === 0) {
            console.log(`fizz ${index}`);

            } else if(index % 5 === 0) {
                console.log(`buzz ${index}`);
            }
      
}

