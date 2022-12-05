/*
Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

class Contador {
    constructor( nombre ) {
        this.nombre = nombre;
        this.contador = 0;
    }
    static contadorGlobal = 0

    getResponsable() {
        return `El responsable del contador es ${ this.nombre }`
    }

    contar() {
        this.contador += 1
        Contador.contadorGlobal += 1
    }

    getCuentaIndividual() {
        return `Cuenta indivbidual ${ this.nombre }: ${ this.contador }`
    }

    getCuentaGlobal() {
        return `Cuenta global ${ Contador.contadorGlobal }`
    }
}

const contador1 = new Contador('martin')
const contador2 = new Contador('marce')
const contador3 = new Contador('liam')
contador1.contar()
contador1.contar()
contador1.contar()
contador2.contar()

console.log( contador1.getCuentaGlobal())

console.log(contador1)
console.log(contador2)
console.log(contador3)
