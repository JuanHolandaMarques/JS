//pegando as informações base do html
function verificar(){
   var fAno = document.getElementById('numNasc')
   var result = document.getElementById('result')
   var data = new Date()
   var usuAno = data.getFullYear()

   //notificando erro na data 
   if (fAno.value == 0 || fAno.value >= usuAno || fAno.value.length < 4 ){
        result.innerHTML = 'Detectamos algum erro, verifíque os dados e tente novamente'
        
    }else{
        //Verificador de idades!
        var boxSex = document.getElementsByName('boxSex')
        var idade = usuAno - fAno.value 
        var gênero = ''
        var divImg = document.getElementById('divImg')
        var img = document.getElementById('img')

        //Idades masculinas
        if(boxSex[0].checked){
            gênero = 'Homem'

            if(idade >= 0 && idade < 13){
                //criança!
                result.style.textAlign = 'center'
                result.innerHTML = `Detectamos um ${gênero} com ${idade} anos de idade`

                img.src = 'imagens/criança-homem.jpg'
                img.hidden = false

            }else if(idade < 18){
                //Jovem!
                result.style.textAlign = 'center'
                result.innerHTML = `Detectamos um ${gênero} com ${idade} anos de idade`

                img.src = 'imagens/jovem-homem.jpg'
                img.hidden = false
            }else if (idade < 50){
                //adulto
                result.style.textAlign = 'center'
                result.innerHTML = `Detectamos um ${gênero} com ${idade} anos de idade`

                img.src = 'imagens/adulto-homem.jpg'
                img.hidden = false
            }else{
                //Idoso!
                result.style.textAlign = 'center'
                result.innerHTML = `Detectamos um ${gênero} com ${idade} anos de idade`

                img.src = 'imagens/idoso-homem.jpg'
                img.hidden = false
            }

        } //Fim bloco masculino
        
        //Idades femininas
        if(boxSex[1].checked){
            gênero = 'Mulher'

            if(idade >= 0 && idade <13){
                //criança
                result.style.textAlign = 'center'
                result.innerHTML = `Detecetamos uma ${gênero} com ${idade} anos`

                img.hidden = false
                img.src = 'imagens/criança-mulher.jpg' 

            }else if(idade < 18){
                //jovem
                result.style.textAlign = 'center'
                result.innerHTML = `Detecetamos uma ${gênero} com ${idade} anos`

                img.hidden = false
                img.src = 'imagens/jovem-mulher.jpg' 

            }else if(idade <50){
                //adulta!
                result.style.textAlign = 'center'
                result.innerHTML = `Detecetamos uma ${gênero} com ${idade} anos`

                img.hidden = false
                img.src = 'imagens/adulto-mulher.jpg'
            }else{
                //idoso
                result.style.textAlign = 'center'
                result.innerHTML = `Detecetamos uma ${gênero} com ${idade} anos`

                img.hidden = false
                img.src = 'imagens/idosa-mulher.jpg'   
            }

        } //Fim bloco feminino   
    }
}