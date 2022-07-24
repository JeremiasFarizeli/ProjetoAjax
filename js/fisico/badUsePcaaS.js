
// INICIO BLOCO DE FUNÇÕES PARA COPIAR
function copiarTextoUserNaoEncontradoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-badUsePcaaS");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarCodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento-badUsePcaaS");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR

let anotacoes = ""
let serial = ""
let etag = ""


//  FUNÇÃO BOTÃO GERAR
function dxcFunctionBadUse() {


    op = document.getElementById("dxc-select-badUse").value;
    switch (op) {
        case '1ª':
            opt01()
            break;
        case '2ª':
            opt02()
            break;
        case '3ª':
            opt03()
            break;
        case '4ª':
            opt04()
            break;
        case '5ª':
            opt05()
            break;
        case '0':
            document.getElementById("dxc-show-badUseOptions").style.display = "none"
            alert("Escolha uma opção")
            document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""
            document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = ""
            document.getElementById("dxc-select-badUse").focus()
            break;
    }

    // **********************************************************************

    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    //document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""


}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND

function dxcFunctionBadUse2() {
    serial = document.getElementById("dxc-input-serial").value
    etag = document.getElementById("dxc-input-etag").value
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = ""
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""
    

    if (serial == "") {
        alert("Preencha o campo serial")
        document.getElementById("dxc-input-serial").value = ""
        document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = ""
        document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""
        document.getElementById("dxc-input-serial").focus()
    }

    else if (etag == "") {
        alert("Preencha o campo E-tag")
        document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = ""
        document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""
        document.getElementById("dxc-input-etag").value = ""
        document.getElementById("dxc-input-etag").focus()
    }

    else if (serial != "" || etag != "") {
        document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = "BAD USE - MANUTENÇÃO"

        anotacoes = `#Nãocobertopelagarantia - Aguardando Manutenção.

Chamado vendor: Em processo de abertura
Previsão: Não informada
Instalado equipamento de BKP: SIM (Serial: ${serial} / Etag: ${etag})`

        //CAMPO ANOTAÇÕES
        document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = anotacoes
    } else {
        document.getElementById("dxc-input-serial").value = ""
        document.getElementById("dxc-input-etag").value = ""
    }
}







function opt01() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = "ORÇAMENTO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando o Orçamento.

Enviado e-mail para a equipe de Stock Coordinator.`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = anotacoes

}


function opt02() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = "BAD USE - MANUTENÇÃO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando Manutenção.

Chamado vendor: Em processo de abertura
Previsão: Não informada
Instalado equipamento de BKP: NÃO`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = anotacoes
}



function opt03() {
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = ""
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = ""
    document.getElementById("dxc-show-badUseOptions").style.display = "block"
    document.getElementById("dxc-input-serial").focus()
}



function opt04() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = "APROVAÇÃO ORÇAMENTO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando aprovação do orçamento.

Enviado orçamento para o email do usuário, aguardando aprovação.`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = anotacoes
}

function opt05() {
    document.getElementById("dxc-show-badUseOptions").style.display = "none"
    document.getElementById("dxc-text-codEquipamento-badUsePcaaS").value = "ORÇAMENTO"
    anotacoes = `#Nãocobertopelagarantia - Aguardando o Orçamento.

Enviado e-mail para a equipe de HardwareManagementVALE.`

    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-badUsePcaaS").value = anotacoes
}









