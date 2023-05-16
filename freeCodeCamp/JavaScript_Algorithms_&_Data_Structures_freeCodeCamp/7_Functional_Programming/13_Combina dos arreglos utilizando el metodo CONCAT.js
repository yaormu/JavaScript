/*
Combina dos arreglos utilizando el método "concat"

Concatenation significa unir elementos de extremo a extremo. 
JavaScript ofrece el método concat para cadenas y arreglos, que funciona de la misma manera. 

Para arreglos, el método es llamado desde un arreglo, 
un segundo arrelgo es proporcionado como argumento de concat, 
este se añadirá al final del primer arreglo. 
Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales. 
Aquí hay un ejemplo:

[1, 2, 3].concat([4, 5, 6]);
El arreglo devuelto sería [1, 2, 3, 4, 5, 6].
-----------------------------------------------------------------------------------------------
Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original. 
La función deber devolver el arreglo concatenado.
*/

function nonMutatingConcat(original, attach) {
    return original.concat(attach)
}

var first = [1, 2, 3];
var second = [4, 5];

console.log(nonMutatingConcat(first, second)) //[1, 2, 3, 4, 5]