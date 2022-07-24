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
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-flex");
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
    let motivoBloqueio = document.getElementById("dxc-input-motivoBloqueio").value
    
    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let ano = str2.slice(0, 4);
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2 +"/"+ano;


    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `OUTROS`

    // FORMANDO AS STRINGS
    let anotacoes = `#Interdição

Não foi possível acessar o local para atendimento, pois ${motivoBloqueio}
    
Nova tentativa de acesso em ${dataFormatada}.`

    // **********************************************************************
   
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-flex").value = anotacoes


}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA


