

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
function dxcFunction() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let fornecedor = document.getElementById("dxc-input-Fornecedor").value
    let verificar = document.getElementById("dxc-input-verificar").value

   
    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = `FORNECEDOR`

    // FORMANDO AS STRINGS
    let anotacoes = `#VendorVALE

Aguardando ações do fornecedor ${fornecedor}.
    
Necessário verificar ${verificar}.
    
Previsão: Não informada.`

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
