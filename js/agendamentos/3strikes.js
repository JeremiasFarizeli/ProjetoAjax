

// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoUserNaoEncontradoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-3trikes");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextoUserNaocodEquipamento() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento-3trikes");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoAssuntoEmail() {
    let textoCopiado = document.getElementById("dxc-text-assuntoEmail-3trikes");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function copiarTextoEmailPadrao() {
    let textoCopiado = document.getElementById("dxc-textarea-emailPadrao");
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
    let ramal = document.getElementById("dxc-input-text-ramal").value
    let celular = document.getElementById("dxc-input-text-celular").value
    let email = document.getElementById("dxc-input-userEmail").value
    let userName = document.getElementById("dxc-input-userName").value
    let numChamado = document.getElementById("numChamado").value

    let dataAgendamento = document.getElementById("dxc-input-date").value;
    let str2 = dataAgendamento; 
    let ano = str2.slice(0, 4);
    let mes2 = str2.slice(5, 7);
    let dia2 = str2.slice(8, 10);
    let dataFormatada = dia2+"/"+mes2 +"/"+ano;

    // CODIGOS DO CAMPO CODIGO DO EQUIPAMENTO
    let codEquipamento = "LOCAL1EMAIL"
    op = document.getElementById("dxc-select-tentativas").value;
    switch (op) {
        case '1ª':
            codEquipamento = "LOCAL1EMAIL"
            break;
        case '2ª':
            codEquipamento = "LOCAL2EMAIL"
            break;
        case '3ª':
            codEquipamento = "LOCAL3EMAIL"
            break;
    }

    // FORMANDO AS STRINGS
    let anotacoes = `#3Strikes
${op} Tentativa de contato com usuário feita em ${dataHora} Via teams e telefone. Novo contato previsto para ${dataFormatada} - Entre ${horaInicio} e ${horaSomada}`

    // **********************************************************************
    let emailPadrao =
        `Bom dia/Boa tarde!

Sr(a) ${userName},

Informo que tentamos entrar em contato através dos telefones ${ramal}, ${celular} e pelo Teams ${email}, mas não foi possível.

Tentaremos novamente o contato:
Dia: ${dataFormatada}.
Horário: Entre ${horaInicio} e ${horaSomada}

Desde já agradecemos

Equipe DXC 
`
    // **********************************************************************

    let assuntoEmail = `IMPORTANTE - Para o atendimento ao seu chamado ${numChamado} - ${op} Tentativa de contato.`

    // **********************************************************************

    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-text-codEquipamento-3trikes").value = codEquipamento
    //CAMPO ANOTAÇÕES
    document.getElementById("dxc-text-anotacaoes-3trikes").value = anotacoes
    //CAMPO ASSUNTO DO EMAIL 
    document.getElementById("dxc-text-assuntoEmail-3trikes").value = assuntoEmail
    //TEXTO CORPO DO EMAIL
    document.getElementById("dxc-textarea-emailPadrao").value = emailPadrao


    // ZERANDO OS CAMPOS.
    //dataAgendamento = document.getElementById("dxc-input-date").value = ""
    horaInicio = document.getElementById("dxc-input-hora-inicio").value = "00:00"
    horaFinal = document.getElementById("dxc-input-hora-final").value = ""
    ramal = document.getElementById("dxc-input-text-ramal").value = ""
    celular = document.getElementById("dxc-input-text-celular").value = ""
    email = document.getElementById("dxc-input-userEmail").value = ""
    userName = document.getElementById("dxc-input-userName").value = ""
    numChamado = document.getElementById("numChamado").value = ""
}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND












