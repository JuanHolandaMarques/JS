function contar(){
    var inicioTxt = document.getElementById('inicio')
    var fimTxt = document.getElementById('fim')
    var passoTxt = document.getElementById('passo')
    var resultado = document.getElementById('result') 

    if (inicioTxt.value.length == 0 || fimTxt.value.length == 0 || passoTxt.value.length == 0 ){

        resultado.innerHTML = '[ERRO] Dados incompletos'

    }else if( passoTxt.value == 0){

        resultado.innerHTML = '[ERRO] <strong>passo</strong> inválido'

    }else{

        var inicio = Number(inicioTxt.value)
        var fim = Number(fimTxt.value)
        var passo = Number(passoTxt.value)
        var contador = inicio

        if(inicio <= fim){
            for (contador = inicio; contador <= fim; contador += passo){
                resultado.innerHTML += ` ${contador} \u{1F449} `
            }
            
        }else{
           for (contador = inicio; contador >= fim; contador -= passo ){
                resultado.innerHTML += ` ${contador} \u{1F449} `
           } 
        }
        resultado.innerHTML += ` \u{1F3C1}`

    }



   



}