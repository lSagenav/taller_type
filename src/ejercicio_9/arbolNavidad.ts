
function imprimirArbol(n:number){
    let tallo: string = "***"
    let largoTallo: number = 2
    let espacio: number
    let estrella: number
    
    for (let index = 0; index < n; index ++){
        estrella = (index * 2)+1
        espacio = n - index
        console.log(" ".repeat(espacio)+ "*".repeat(estrella))
    }
    
    for (let i = 0; i <largoTallo; i++) {
           console.log(`${" ".repeat(n-1)}${tallo}`)
    }
   
    
   // console.log(`${" ".repeat(n-1)}${tallo}`)

    }
    imprimirArbol(10)