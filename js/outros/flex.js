


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
    let nomeEUC = document.getElementById("dxc-input-userName-Flex").value
    let numChamado = document.getElementById("numChamado").value


    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `TI VALE`

    // FORMANDO AS STRINGS
    let anotacoes = `#Acordado

Conforme acordado com o EUC ${nomeEUC} para atendimento de chamado Flex ${numChamado}.`

    // **********************************************************************
   
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-flex").value = anotacoes


}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA


