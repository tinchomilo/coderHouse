const numGenerator = () => {
    const salida = {}
    for( let i = 0; i < 10000; i++) {
        const randomNum = Math.ceil( (Math.random() * 20))
        salida[randomNum] ? salida[randomNum] += 1 : salida[randomNum] = 1
    }
    return salida
}


console.log( numGenerator() )