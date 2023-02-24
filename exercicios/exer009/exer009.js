var idade = 26

console.log(`A sua idade é ${idade}`)

if( idade >= 18){
    console.log('O voto é obrigatório')
} else if( idade >=16 || idade >= 70){
    console.log('Para você o voto é opcional')
} else{
    console.log('Você ainda não pode votar')
}
