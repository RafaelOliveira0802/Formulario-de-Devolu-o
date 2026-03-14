document.getElementById('addEquip').addEventListener('click', function() {
    const container = document.getElementById('lista-equipamentos');
    const novoItem = document.createElement('div');
    novoItem.classList.add('equipamento-item');

    novoItem.innerHTML = `
        <input type="text" name="equipamento[]" placeholder="Nome do Equipamento" required>
        <input type="number" name="qtd[]" min="1" placeholder="Qtd" required>
        <div>
                        <legend>Motivo da Devolução</legend>
                        <select name="motivo" id="" required>
                            <option value="">Selecione o Motivo</option>
                            <option value="naoliga">Não liga</option>
                            <option value="estetica">Estética</option>
                            <option value="naocominica">Não Comunica</option>
                            <option value="intermitencia">Intermitência</option>
                            <option value="naocadastra">Não Cadastra</option>
                            <option value="falhatamper">Falha Tamper</option>
                            <option value="equipamentotravado">Equipamento Travado</option>
                            <option value="naodetectamovimento">Não Detecta Movimento</option>
                            <option value="bateriacomproblema">Bateria Com Problema</option>
                            <option value="equipamentook">Equipamento OK</option>
                            <option value="disparofalso">Disparo Falso</option>
                            <option value="utilizadodokit">Utilizado do Kit</option>
                        </select>
                    </div>
        <button type="button" class="btn-remove" onclick="removerCampo(this)">×</button>            
    `;

    container.appendChild(novoItem);
});

function removerCampo(botao) {
    const itens = document.querySelectorAll('.equipamento-item');
    if (itens.length > 1) {
        botao.parentElement.remove();
    } else {
        alert("Pelo menos um equipamento deve ser listado.");
    }
}