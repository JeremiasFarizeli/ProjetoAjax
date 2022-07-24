
// INICIO BLOCO DE FUNÇÕES PARA COPIAR
function copiarTextoUserNaoEncontradoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-bateria");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarCodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR




//  FUNÇÃO BOTÃO GERAR
function dxcFunctionBateria() {

    let anotacoes = ""

    op = document.getElementById("dxc-select-bateria").value;
    switch (op) {
        case '1ª':
            document.getElementById("dxc-text-codEquipamento").value = "BATERIA"
            anotacoes = `#BateriaGarantia
Aguardando a substituição.
            
Chamado vendor: Em processo de abertura
Previsão: Não informada`
            break;
        case '2ª':
            document.getElementById("dxc-text-codEquipamento").value = "BATERIA"
            anotacoes = `#BateriaTroca
Aguardando a bateria.
            
Chamado vendor: Em processo de abertura
Previsão: Não informada`
            break;
        case '3ª':
            document.getElementById("dxc-text-codEquipamento").value = "BATERIA"
            anotacoes = `#BateriaOrçamento
Aguardando orçamento.
            
Enviado e-mail para a equipe de Stock Coordinator.`
            break;
        case '4ª':
            document.getElementById("dxc-text-codEquipamento").value = "BATERIA"
            anotacoes = `#BateriaAprovação - Aguardando aprovação do orçamento.

Enviado orçamento ao email do usuário, aguardando aprovação.`
            break;
            case '5ª':
                document.getElementById("dxc-text-codEquipamento").value = "BATERIA"
                anotacoes = `#BateriaOrçamento
Aguardando orçamento.
                
Enviado e-mail para a equipe de HardwareManagementVALE.`
                break;
        case '0':
            alert("Escolha uma opção")
            document.getElementById("dxc-text-codEquipamento").value = ""
            document.getElementById("dxc-text-anotacaoes-bateria").value = ""
            document.getElementById("dxc-select-bateria").focus()
            break;
    }


    // **********************************************************************

    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    //document.getElementById("dxc-text-codEquipamento").value = ""
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-bateria").value = anotacoes

}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND












