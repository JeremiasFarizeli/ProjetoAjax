<?php 
    include("header.php");
?>


<script src="../js/002_agendamentoNaoCumprido.js"></script>



<!-- Inicio do container central -->
<div>
    <section>
        <div class="dxc-card-left">
            <aside>
                <div>

                    <label class="dxc-label2" for="">AGENDAMENTO NÃO CUMPRIDO:</label><br>
                    <br>

                    <div>
                        <textarea class="texto2" cols="30"
                            rows="10">Quando usuário agenda o atendimento e no dia e horário, por ele agendado, o mesmo não foi encontrado em nenhum dos meios de contato disponíveis. Enviar E-mail e encerra o incident.</textarea>
                    </div>


                    <br><br><br>
                    <label class="dxc-label" for="">Foi agendado para:</label>
                    <input class="dxc-input-date" id="dxc-input-date" type="date">

                    <label class="dxc-label">Horário entre:</label>
                    <input class="dxc-input-hora" id="dxc-input-hora-inicio" onblur="setHoraFinal()" value="00:00"
                        type="time" min="00:00" max="23:00" required>
                    <label class="dxc-label">e</label>
                    <input class="dxc-input-hora" id="dxc-input-hora-final" value="00:00" type="text"
                        placeholder="00:00" disabled>

                    <br>



                    <br>
                    <input class="dxc-input-text" id="dxc-input-userName" type="text" placeholder="Nome do usuário">

                    <div>

                        <input style="width: 300px;" class="dxc-input-text" id="numChamado" type="text"
                            placeholder="Numero do chamado">

                        <div class="dxc-poisition-right">
                            <button class="btnGerar" class="btnGerar-info"
                                onclick="dxcFunctionUserNotFound()">GERAR</button>
                        </div>


                    </div>



                </div>
            </aside>
        </div>
        <div class="dxc-card-right ">
            <aside>
                <div>


                    <div class="div-texto3"><br>
                        <label class="dxc-label3"> Texto Assunto do E-mail:</label>
                        <label class="copyButton" onclick="copiarTextoAssuntoEmail()">Copiar</label>
                        <textarea class="texto3" name="" id="dxc-text-assuntoEmail" cols="30" rows="10"></textarea>
                    </div>

                    <div class="div-texto4"><br>
                        <label class="dxc-label3"> E-mail padrão e Informação de Resolução:</label>
                        <label class="copyButton" onclick="copiarTextoEmailPadrao()">Copiar</label>
                        <textarea class="texto4" name="" id="dxc-textarea-emailPadrao-NaoCumprido" cols="30"
                            rows="10"></textarea>
                    </div>


                </div>
            </aside>
        </div>
    </section>
</div> <!-- Fim do container central -->




<?php 
    include("footer.php");
?>