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



// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAgendamentoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-EUC");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextocodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO



//  FUNÇÃO BOTÃO GERAR PAGINA
function dxcFunctionAgendamento() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let horaInicio = document.getElementById("dxc-input-hora-inicio").value
    let userName = document.getElementById("dxc-input-userName-EUC").value
    let motivoEUC = document.getElementById("dxc-input-userName-MotivoEUC").value
    let contatoEUC = document.getElementById("dxc-input-userName-ContatoEUC").value

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `TI VALE`

    // FORMANDO AS STRINGS
    let anotacoes = `#EUC 

Aguardando retorno do EUC.
    
Solicitado apoio ao EUC ${userName} para ${motivoEUC}.
    
Contato realizado via ${contatoEUC} em ${dataFormatada} - ${horaInicio}.`

    // **********************************************************************
   
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-EUC").value = anotacoes



    // ZERANDO OS CAMPOS.
    //document.getElementById("dxc-input-userName-EUC").value = ""
    //document.getElementById("dxc-input-userName-MotivoEUC").value = ""
    //document.getElementById("dxc-input-userName-ContatoEUC").value = ""
}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA
