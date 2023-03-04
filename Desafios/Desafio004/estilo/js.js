var numTxt = document.getElementById('numTxt')
var tabuada = document.getElementById('tabuada')

function gerarTabuada(){
    var num = Number(numTxt.value)
    var contador = 1
    tabuada.innerHTML = ''

    for( contador ; contador <=10 ; contador++){
        var item = document.createElement('option')

        item.text = `${num} x ${contador} = ${(num*contador)}`
        tabuada.appendChild(item)

    }
    

    
}