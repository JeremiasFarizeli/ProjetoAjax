


// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAgendamentoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-tipo3");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextocodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento-tipo3");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO



//  FUNÇÃO BOTÃO GERAR PAGINA
function dxcFunctionAgendamentoTipo3() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `AGENDADO PARA ${dataFormatada}`

    // FORMANDO AS STRINGS
    let anotacoes = `#Tipo3 

Localidade tipo 3, agendado atendimento para ${dataFormatada}.`



    // **********************************************************************
    
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento-tipo3").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-tipo3").value = anotacoes


    // ZERANDO OS CAMPOS.
    dataAgendamento = document.getElementById("dxc-input-date").value = ""

}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA
