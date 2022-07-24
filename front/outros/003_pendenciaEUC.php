<?php 
    include("header.php");
?>


<script src="../js/003_pendenciaEUC.js"></script>

<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">PENDENCIA DO EUC:</label><br>
                    <br><br>


                    <label class="dxc-label" for="">Contato feito em:</label>
                    <input class="dxc-input-date" id="dxc-input-date" type="date">
                    <br>

                    <label class="dxc-label">Horário:</label>
                    <input class="dxc-input-hora" id="dxc-input-hora-inicio" onblur="setHoraFinal()" value="00:00"
                        type="time" min="00:00" max="23:00" required>


                    <br><br>

                    <br><br><br>

                    <input class="dxc-input-text" id="dxc-input-userName-EUC" type="text" placeholder="Nome do EUC">
                    <input class="dxc-input-text" id="dxc-input-userName-MotivoEUC" type="text"
                        placeholder="Qual a ação é esperada do EUC.">
                    <input class="dxc-input-text" id="dxc-input-userName-ContatoEUC" type="text"
                        placeholder="Contato feito via ? ...">
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
                        <textarea class="texto2" name="" id="dxc-text-anotacaoes-EUC" cols="30" rows="10"></textarea>
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