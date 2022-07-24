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
function copiarTexto() {
    let textoCopiado = document.getElementById("dxc-textarea-encerramento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}

// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO




//  FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND
function dxcFunctionUserNotFound() {
    
    // COLETA DADOS DA PAGINA USUÁRIO NÃO ENCONTRADO
    let causaraiz = document.getElementById("dxc-textarea-causaraiz").value
    let acaoimediata = document.getElementById("dxc-textarea-acaoimediata").value
    let acaocorretiva = document.getElementById("dxc-textarea-acaocorretiva").value
    let testes = document.getElementById("dxc-input-teste-encerrar-incident").value
    let analista = document.getElementById("dxc-input-analista-encerrar-incident").value
    let observacao = document.getElementById("dxc-textarea-observacao").value
   

    // FORMANDO AS STRINGS
    let encerramento = `CAUSA RAIZ: ${causaraiz}.

AÇÃO IMEDIATA: ${acaoimediata}.

AÇÃO CORRETIVA: ${acaocorretiva}.

TESTES: ${testes}.

ANALISTA: ${analista}.

OBSERVAÇÃO: ${observacao}
`

    // **********************************************************************
    
    //TEXTO PARA CODIGO DO EQUIPAMENTO: 
    document.getElementById("dxc-textarea-encerramento").value = encerramento


}
//  FIM DA FUNÇÃO BOTÃO GERAR PAGINA USER NOT FOUND












