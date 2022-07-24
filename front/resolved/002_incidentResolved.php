<?php 
    include("header.php");
?>

<script src="../js/002_incidentResolved.js"></script>


<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">ENCERRAR INCIDENT:</label><br>


                    <label class="dxc-label4">Causa Raiz:</label>
                    <textarea id="dxc-textarea-causaraiz"> </textarea>

                    <label class="dxc-label4">Ação Imediata:</label>
                    <textarea id="dxc-textarea-acaoimediata"> </textarea>

                    <label class="dxc-label4">Ação Corretiva:</label>
                    <textarea id="dxc-textarea-acaocorretiva"> </textarea>



                    <br>

                    <label class="dxc-label4">Testes:</label>
                    <div>
                        <input id="dxc-input-teste-encerrar-incident" type="text">
                    </div>

                    <label class="dxc-label4">Analista:</label>
                    <div>
                        <input id="dxc-input-analista-encerrar-incident" type="text">
                    </div>






                    <label class="dxc-label4">Observações:</label>
                    <div>
                        <textarea id="dxc-textarea-observacao"></textarea>
                        <div class="dxc-float-botao-gerar">
                            <div>
                                <button class="btnGerar" class="btnGerar-info"
                                    onclick="dxcFunctionUserNotFound()">GERAR</button>
                            </div>

                        </div>

                    </div>

                    <!-- DIV BOTÃO -->


                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>

                    <div class="div-texto4"><br>
                        <label class="dxc-label3"> Texto de Encerramento:</label>
                        <label class="copyButton" onclick="copiarTexto()">Copiar</label>
                        <textarea id="dxc-textarea-encerramento" cols="30" rows="10"></textarea>
                    </div>


                </div>
            </aside>
        </div>
    </section>
</div> <!-- Fim do container central -->

<?php 
    include("footer.php");
?>