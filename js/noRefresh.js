// Iniciao do Bloco de codigo para exibir data e hora atualizados

var dataHora;
var zeroFill = n => { return ('0' + n).slice(-2); }
// Cria intervalo
var interval = setInterval(() => {
    var now = new Date();
    dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + ' às ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());
    // Exibe na tela usando a div#data-hora
    //console.log(dataHora);
}, 1000);
// Fim do Bloco de codigo para exibir data e hora atualizados

//variáveis globais:

let horaSomada


function setHoraFinal(){
    let horaRecebida = document.getElementById("dxc-input-hora-inicio").value
    let horaSplit = horaRecebida.split(":")
    let hora = horaSplit["0"] 
    let minuto = horaSplit["1"]
    horaSomada = 0


    let horaInt = parseInt(horaSplit["0"]) + 1

    horaSomada =  `${horaInt}:${minuto}`
    document.getElementById("dxc-input-hora-final").value = horaSomada
}





function carregarPagina(url, script) {

    let ajax = new XMLHttpRequest()
    ajax.open('GET', url)

    console.log(script)

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            let dxcConteudoCentral = document.getElementById('dxc-conteudo-central')
            let cabecalho = document.createElement('script').append = script
           
            dxcConteudoCentral.innerHTML = ajax.responseText
            console.log(cabecalho)
        }
    }

    ajax.send()
}

