let vagas = [1, 3 , 6 , 10 , 5 , 20]
vagas.sort()

/*for(let contador = 0; contador <= vagas.length ; contador++ ){
    console.log(vagas[contador])
}*/

for(let contador in vagas){
    console.log(` A posição ${contador} Amazena o valor: ${vagas[contador]} `)
}

contador = vagas.indexOf(0)

if(contador == -1){
    console.log('Valor não existente')
}else{
    console.log(contador)  
}


