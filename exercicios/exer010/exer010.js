var dHoje = new Date()
var diaSemana = dHoje.getDay()

switch (diaSemana) {
    case 0:
        console.log ('Hoje é Domingo')
        break;
    case 1:
        console.log('Hoje é Segunda-Feira.')
        break
    case 2:
        console.log('Hoje é Terça-feira.')
        break
    case 3:
        console.log('Hoje é Quarta-Feira, meus bacanas.')
        break
    case 4:
        console.log('Hoje é Quinta-Feira')
        break
    case 5:
        console.log('Hoje é Sexta-Feira!')
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
    default:
        console.log('Esse dia não existe!')
        break;
}