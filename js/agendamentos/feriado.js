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


// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAgendamentoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-bkpDados");
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
function dxcFunctionBkpDados() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let feriado = document.getElementById("dxc-input-feriado").value;
    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `AGENDADO PARA ${dataFormatada}`

    // FORMANDO AS STRINGS
    let anotacoes = `#Feriado

Chamado sendo parado devido ao feriado de ${feriado}.
Será reaberto no primeiro horário do próximo dia útil.`



    // **********************************************************************
    
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-bkpDados").value = anotacoes


    // ZERANDO OS CAMPOS.
    //dataAgendamento = document.getElementById("dxc-input-date").value = ""

}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA
