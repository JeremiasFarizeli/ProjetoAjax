
// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoAgendamentoAnotacoes() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-aguardandoRetirada");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTexto() {
    let textoCopiado = document.getElementById("dxc-text-codEquipamento-aguardandoRetirada");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// FIM BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO


