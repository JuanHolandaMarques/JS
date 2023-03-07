let formNumber = document.querySelector('input#formNumeros').value
let valores = document.querySelector('select#valores')
let resultado = document.querySelector('section#resultado')
let valor = []

function seNumero(num){
    if( num >= 1 && num <= 100 ){
        return true
    }else{
        return false
    }

}

function naLista(num, list){
    if( list.indexOf(num != -1) ){
        return true
    }else{
        return false
    }
}

function adicionar(){
    valor.push(formNumber.value)

    if(seNumero(valor) && !naLista(formNumber, valor) ){
        resultado.innerHTML = formNumber.value
    }else{
        resultado.innerHTML = formNumber
    }

}