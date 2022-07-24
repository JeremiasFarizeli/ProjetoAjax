
// INICIO BLOCO DE FUNÇÕES PARA COPIAR TEXTOS PÁGINA USUÁRIO NÃO ENCONTRADO
function copiarTextoFila() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-fila");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}
function copiarTextoAtendimento() {
    let textoCopiado = document.getElementById("dxc-text-anotacaoes-atendimento");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

