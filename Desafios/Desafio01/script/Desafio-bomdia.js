function carregar (){
    var horaLocal = document.querySelector("p#horaLocal")
    var img = document.querySelector("img#imgHora")
    var data = new Date()
    var hora = data.getHours()
    var minutos =  data.getMinutes()    

    if ( hora >= 0 && hora < 12){
        //Bom dia!
        horaLocal.innerHTML = `Oi, agora são ${hora}:${minutos} da manhã, tenha um bom dia!`

        img.src = "imagens/bom-dia.jpg"

    }else if(hora >= 12 && hora <18){
        //boa tarde!
        horaLocal.innerHTML = `Oi, agora são ${hora}: ${minutos} da tarde, tenha uma boa tarde!`

        img.src = "imagens/bom-tarde.jpg"

        document.body.style.backgroundImage = 'linear-gradient(to bottom, #FCFDC4, #FFC856, #A05132)'

    }else{
        //boa noite!
        horaLocal.innerHTML = `Oi, agora são ${hora}:${minutos} da noite, tenha uma boa noite!`

        img.src = "imagens/bom-noite.jpg"

        document.body.style.backgroundImage = 'linear-gradient(to bottom, #53175D, #193753 30%, #200748)'
    }


}


