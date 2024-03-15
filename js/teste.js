document.addEventListener("DOMContentLoaded", function () {
        // Adiciona um evento de clique ao botão "Adicionar Dados"
        document.querySelector("button[type='submit']").addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário

            // Captura os valores dos campos do formulário
            const nomeOrganizacao = document.getElementById("nomeOrganizacao").value;
            const modeloCarro = document.getElementById("modeloCarro").value;
            const enderecoOrganizacao = document.getElementById("enderecoOrganizacao").value;
            const dataPreenchimento = document.getElementById("dataPreenchimento").value;

            // Captura o veículo selecionado
            const veiculoSelecionado = document.querySelector("input[name='TransporteLeves']:checked, input[name='TransporteMedios']:checked, input[name='TransporteSemiPesados']:checked, input[name='TransportePesados']:checked, input[name='TransporteNavios']:checked");

            // Verifica se algum veículo foi selecionado
            if (veiculoSelecionado) {
                // Cria uma nova linha na tabela "analiseTable" e insere os valores capturados
                const newRow = document.getElementById("analiseTable").insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);

                // Define os valores das células na nova linha
                cell1.textContent = ""; // Aqui você pode adicionar um ID, se desejar
                cell2.textContent = `${nomeOrganizacao}, ${enderecoOrganizacao}, ${dataPreenchimento}, ${modeloCarro}`;
                cell3.textContent = veiculoSelecionado.value; // Aqui você pode adicionar mais detalhes de análise

                // Limpa os campos do formulário
                document.getElementById("coletaDadosForm").reset();
            } else {
                alert("Por favor, selecione um veículo.");
            }
        });
    });

