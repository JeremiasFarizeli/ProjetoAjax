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


function setHoraFinal() {
    let horaRecebida = document.getElementById("dxc-input-hora-inicio").value
    let horaSplit = horaRecebida.split(":")
    let hora = horaSplit["0"]
    let minuto = horaSplit["1"]
    horaSomada = 0

    let horaInt = parseInt(hora) + 1

    horaSomada = `${horaInt}:${minuto}`
    document.getElementById("dxc-input-hora-final").value = horaSomada
}

// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAssuntoEmail() {
    let textoCopiado = document.getElementById("dxc-text-assuntoEmail");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoEmailPadrao() {
    let textoCopiado = document.getElementById("dxc-textarea-emailPadrao-NaoCumprido");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO




//  FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND
function dxcFunctionUserNotFound() {

    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let horaFinal = document.getElementById("dxc-input-hora-final").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento;
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2 + "/" + mes2;


    // FORMANDO AS STRINGS
   
    // **********************************************************************
    let emailPadrao =
`Prezado(a), ${userName}
 
Seu chamado está sendo encerrado pois no agendamento solicitado para dia ${dataFormatada} às ${horaFinal} não conseguimos localiza-lo (a).
 
Caso o problema persista, não se preocupe, basta entrar em contato pelos canais de atendimento Virtual ou não sendo possível remotamente, você também pode agendar atendimento no lounge presencial conforme links abaixo que o atendimento será realizado normalmente.
 
Link lounge Virtual:
https://apps.powerapps.com/play/e/f9e84079-acdf-4292-8311-457e5647c4b5/a/47642e54-b64a-42cb-94ef-cb66069cb0c0?tenantId=7893571b-6c2c-4cef-b4da-7d4b266a0626#
 
Link lounge Presencial:
https://outlook.office365.com/owa/calendar/ITServicesLoungeEspritoSanto@globalvale.onmicrosoft.com/bookings/
 
 
Atenciosamente,
Equipe DXC

`
    // **********************************************************************

    let assuntoEmail = `IMPORTANTE - Encerramento do chamado ${numChamado}`

    // **********************************************************************


    //CAMPO ASSUNTO DO EMAIL 
    document.getElementById("dxc-text-assuntoEmail").value = assuntoEmail
    //TEXTO CORPO DO EMAIL
    document.getElementById("dxc-textarea-emailPadrao-NaoCumprido").value = emailPadrao


    // ZERANDO OS CAMPOS.
    email = document.getElementById("dxc-input-userEmail").value = ""
    userName = document.getElementById("dxc-input-userName").value = ""
    numChamado = document.getElementById("numChamado").value = ""
}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND












