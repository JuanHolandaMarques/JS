let formNumber = document.querySelector('input#formNumeros')
let valores = document.querySelector('select#valores')
let resultado = document.querySelector('section#resultado')
let valor = []
let contFinalizar = Number(0)

function seEntre1A100(num){

    if(num >= 1 && num <= 100){
        return true
    }else{
        return false
    }

}

function naLista(num, lista){
    if( lista.indexOf(Number(num)) != -1 ){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (seEntre1A100(formNumber.value) && !naLista(formNumber.value, valor)){

        let item = document.createElement('option')

        valor.push(Number(formNumber.value))
        item.text = `Valor ${formNumber.value} adicionado`
        valores.appendChild(item)

        
        
    }else if(formNumber.value > 100){
        alert('[Error] Valores acima de 100 não são validos')

    }else{
        alert('[Error] Valores nulos ou repetidos não são validos, por favor verifique os dados')
    }

    formNumber.value = ''
    resultado.innerHTML = ''
    formNumber.focus()
}

function finalizar(){
    if(valor.length == 0){
        alert('[Error] Valores nulos ou repetidos não são validos, por favor verifique os dados')

    }else{
        let maiorValor = valor[0]
        let menorValor = valor[0]
        let soma = 0
        let media = 0
        let total = valor.length

        for(let posicao in valor){
            soma += valor[posicao]
            if(maiorValor < valor[posicao]){
                maiorValor = valor[posicao]
    
            }else if(menorValor > valor[posicao]){
                menorValor = valor[posicao]
            }
        }
        media = soma / total 
         
        resultado.innerHTML += `<p>Total de valores cadastrados: ${valor.length} </p>`
    
        resultado.innerHTML += `<p> O maior valor digitado foi: ${maiorValor} e o menor foi: ${menorValor}</p> `

        resultado.innerHTML += `<p> O resultado da soma entre os valores foi:  ${soma}</p>`

        resultado.innerHTML += `<p> a média dos valores foi: ${media} </p>`

    } 

}


