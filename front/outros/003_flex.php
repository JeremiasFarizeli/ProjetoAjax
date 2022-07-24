<?php 
    include("header.php");
?>


<script src="../js/003_flex.js"></script>

<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">CHAMADO FLEX:</label><br>
                    <br><br>




                    <br><br>

                    <br><br><br>

                    <input class="dxc-input-text" id="dxc-input-userName-Flex" type="text" placeholder="Nome do EUC">
                    <input style="width: 300px;" class="dxc-input-text" id="numChamado" type="text" placeholder="Numero do chamado Flex">

                    <br>

                    <!-- DIV BOTÃO -->
                    <div>

                        <div class="dxc-poisition-right">
                            <button class="btnGerar" class="btnGerar-info"
                                onclick="dxcFunctionAgendamento()">GERAR</button>
                        </div>

                    </div>

                </div>
            </aside>
        </div>
        <div class="dxc-card-right">
            <aside>
                <div>

                    <div class="div-texto1"><br>
                        <label class="dxc-label3">Código Equipamento:</label>
                        <label class="copyButton" onclick="copiarTextocodEquipamento()">Copiar</label>
                        <textarea class="texto1" name="" id="dxc-text-codEquipamento" cols="30" rows="10"></textarea>
                    </div>

                    <br><br><br><br>

                    <div class="div-texto2 ">
                        <label class="dxc-label3"> Padronização campo anotações:</label>
                        <label class="copyButton" onclick="copiarTextoAgendamentoAnotacoes()">Copiar</label>
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes-flex" cols="30" rows="10"></textarea>
                    </div>




                </div>
            </aside>
        </div>
    </section>
</div>




<!-- Inicio do footer -->
<?php 
    include("footer.php");
?>