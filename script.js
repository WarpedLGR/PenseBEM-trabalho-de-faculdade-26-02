let programa = 0
let pergunta = 0
let tentativa = 1
let pontuação = 0

let gabarito101 = new Array('A','D','C','B','B')
let gabarito102 = new Array('C','A','C','C','B')
let gabarito103 = new Array('A','D','C','B','B')
let gabarito104 = new Array('A','D','C','B','B')
let gabarito105 = new Array('A','D','C','B','B')

let gabarito = new Array()
let i = 0

iniciar = function () {
    programa = prompt ('Digite o código do programa (101 a 105):','')

if(programa == '101') {
    gabarito = gabarito101
    pergunta = 1
}
else if(programa == '102') {
    gabarito = gabarito102
    pergunta = 31
}
else if(programa == '103') {
    gabarito = gabarito103
    pergunta = 61
}
else if(programa == '104') {
    gabarito = gabarito104
    pergunta = 91
}
else if(programa == '105') {
    gabarito = gabarito104
    pergunta = 121
}
else {
    alert('GO HOME AND BE A FAMILY MAN! (código de programa inválido)')
    iniciar()
}
tentativa = 1
pontuação = 0
i = 0

document.getElementById('tela1').value = `${programa}: ${pergunta}`
document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`
}
jogar = function(resposta){
    if (resposta == gabarito [i]){
        document.getElementById('tela2').style.border = 'green 3px solid'

        if(tentativa == 1)
            pontuação += 3
        else if(tentativa == 2)
            pontuação += 2
        else if(tentativa == 3)
            pontuação ++

        i++
        pergunta++
        tentativa = 1
        

    }
    else{
        document.getElementById('tela2').style.border = 'red 3px solid'
        tentativa++;

        if(tentativa > 3){

        i++
        pergunta++
        tentativa = 1
        }

    }
    document.getElementById('tela1').value = `${programa}:${pergunta}`
    document.getElementById('tela2').value = `Tentativa ${tentativa} de 3`

    if(i == 5) {
        document.getElementById('tela1').value = `**FIM**`
         document.getElementById('tela2').value = `PONTUAÇÃO ${pontuação} de 3`
    }
    i = 0
}