let formValoresTxt = document.getElementById('formNumeros')
let valores = document.getElementById('valores')



function adicionar(){
    let item = document.createElement('option')
    let formValores = Number(formValoresTxt.value)
    let resultado = document.getElementById('resultado')
    let valor = []
    valor.push(formValores)
    
    for(let contForm in valor ){

        item.text = ` ${valor[contForm]} ` 

    }

    valores.appendChild(item)

    

}