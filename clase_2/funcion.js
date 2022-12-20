/*
¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.

Se espera una duración de 10 minutos.

*/

const mostrarLista = ( arr ) => {
    if( !arr.length ) return 'Lista vacia'

    arr.forEach( elem => console.log(elem) )

    return arr.length
}

let result = mostrarLista([])

console.log(result)