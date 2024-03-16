document.addEventListener("DOMContentLoaded", function () {
// Definição dos pesos para cada categoria de veículo
const pesos = {
    "TransporteLeves": 150,
    "TransporteMedios": 1500,
    "TransporteSemiPesados": 3800,
    "TransportePesados": 20000,
    "TransporteNavios": 30000
};

// Função para calcular o consumo para cada veículo
function calcularConsumo() {
    let veiculoSelecionado = document.querySelector("input[type='checkbox']:checked");
    if (!veiculoSelecionado) {
        console.log("Nenhum veículo selecionado.");
        return;
    }

    let nomeVeiculo = veiculoSelecionado.value;
    let consumoInput = prompt("Insira o consumo para o veículo " + nomeVeiculo + ":");
    let consumo = parseFloat(consumoInput);

    // Verifica se o valor de consumo é válido
    if (isNaN(consumo)) {
        console.log("Valor de consumo inválido. Insira um número válido.");
        return;
    }

    let peso = pesos[nomeVeiculo];
    let consumoTotal = peso * consumo;

    console.log("O consumo total para o veículo " + nomeVeiculo + " é: " + consumoTotal.toFixed(2) + " litros");

    // Calcula a emissão de CO2
    let emissaoCO2 = consumoTotal * 2.3; // kg de CO2
    console.log("Emissão de CO2: " + emissaoCO2.toFixed(2) + " kg");
}

    const calcularBtn = document.querySelector("#calcularBtn");
    if (calcularBtn) {
        calcularBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário

            // Captura os valores dos campos do formulário
            const nomePessoal = document.getElementById("nomePessoal").value;
            const placaVeiculo = document.getElementById("placaVeiculo").value;
            const modeloCarro = document.getElementById("modeloCarro").value;
            const kmPercorrido = parseFloat(document.getElementById("kmPercorrido").value);
            const dataPreenchimento = document.getElementById("dataPreenchimento").value;

            // Verifica se o valor de kmPercorrido é um número válido
            if (isNaN(kmPercorrido) || kmPercorrido <= 0) {
                alert("Por favor, insira um valor válido para os quilômetros percorridos.");
                return;
            }

            // Captura o veículo selecionado
            const veiculoSelecionado =
                document.querySelector("input[name='TransporteLeves']:checked") ||
                document.querySelector("input[name='TransporteMedios']:checked") ||
                document.querySelector("input[name='TransporteSemiPesados']:checked") ||
                document.querySelector("input[name='TransportePesados']:checked") ||
                document.querySelector("input[name='TransportePesados']:checked");
            // Verifica se algum veículo foi selecionado
            if (veiculoSelecionado) {
                // Calcula o consumo automaticamente
                const consumo = calcularConsumoAutomatico(kmPercorrido);

                // Calcula a emissão de CO2
                const emissaoCO2 = calcularCO2(kmPercorrido, consumo);

                // Cria uma nova linha na tabela "analiseTable" e insere os valores capturados
                const newRow = document.getElementById("analiseTable").insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);
                const cell4 = newRow.insertCell(3);
                const cell5 = newRow.insertCell(4);
                const cell6 = newRow.insertCell(5);

                // Define os valores das células na nova linha
                cell1.textContent = nomePessoal;
                cell2.textContent = modeloCarro + ", " + placaVeiculo;
                cell3.textContent = kmPercorrido + " km";
                cell4.textContent = consumo.toFixed(2);
                cell5.textContent = emissaoCO2.toFixed(2) + " kg"; // Arredonda para duas casas decimais
                cell6.textContent = dataPreenchimento;


                // Limpa os campos do formulário
                document.getElementById("coletaDadosForm").reset();
            } else {
                alert("Por favor, selecione um veículo.");
            }
        });
    } else {
        console.error("Botão de envio não encontrado.");
    }

    // Função para calcular a emissão de CO2 com base no consumo de combustível
    function calcularCO2(consumoCombustivel) {
        // Calcula a quantidade de CO2 produzida
        let quantidadeCO2 = consumoCombustivel * 0.83 * 0.75 * 3.7; // kg de CO2 por litro de combustível

        return quantidadeCO2; // Retorna o resultado
    }

    // Função para calcular o consumo de combustível com base na distância percorrida
    function calcularConsumoAutomatico(kmPercorrido) {
        // Assume um consumo médio de 3 km por litro de combustível
        const consumoMedio = 9; // km por litro
        return kmPercorrido / consumoMedio; // Calcula o consumo em litros
    }
    
    // Dados fornecidos
    const distanciaPercorrida = kmPercorrido; // em km

    // Calcular o consumo
    const consumo = calcularConsumoAutomatico(distanciaPercorrida);
    console.log('Consumo de combustível:', consumo.toFixed(2), 'litros');

    // Calcular a emissão de CO2
    const emissaoCO2 = calcularCO2(consumo);
    console.log('Emissão de CO2:', emissaoCO2.toFixed(2), 'kg');
});
