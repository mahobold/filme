function converterTemperatura() {
    // Obter os elementos checkbox selecionados
    var checkboxesOrigem = document.querySelectorAll('input[name="unidadeOriginal"]:checked');
    var checkboxesDestino = document.querySelectorAll('input[name="unidadeDestino"]:checked');

    // Verificar se uma opção foi selecionada para unidade original e destino
    if (checkboxesOrigem.length !== 1 || checkboxesDestino.length !== 1) {
        alert("Selecione uma opção para a unidade original e destino.");
        return;
    }

    // Obter os valores selecionados
    var unidadeOriginal = checkboxesOrigem[0].value;
    var unidadeDestino = checkboxesDestino[0].value;

    // Obter a temperatura original do usuário
    var temperaturaOriginal = parseFloat(prompt("Digite a temperatura original:"));

    // Verificar se a temperatura original é um número válido
    if (isNaN(temperaturaOriginal)) {
        alert("Por favor, insira uma temperatura válida.");
        return;
    }

    // Converter a temperatura
    var temperaturaConvertida;

    if (unidadeOriginal === "celsius") {
        if (unidadeDestino === "fahrenheit") {
            temperaturaConvertida = (temperaturaOriginal * 9/5) + 32;
        } else if (unidadeDestino === "kelvin") {
            temperaturaConvertida = temperaturaOriginal + 273.15;
        } else if (unidadeDestino === "hobold") {
            temperaturaConvertida = temperaturaOriginal / 1.5;
        } else {
            temperaturaConvertida = temperaturaOriginal;
        }
    } else if (unidadeOriginal === "fahrenheit") {
        if (unidadeDestino === "celsius") {
            temperaturaConvertida = (temperaturaOriginal - 32) * 5/9;
        } else if (unidadeDestino === "kelvin") {
            temperaturaConvertida = (temperaturaOriginal - 32) * 5/9 + 273.15;
        } else if (unidadeDestino === "hobold") {
            temperaturaConvertida = (temperaturaOriginal - 32) * 5/9 / 1.5;
        } else {
            temperaturaConvertida = temperaturaOriginal;
        }
    } else if (unidadeOriginal === "kelvin") {
        if (unidadeDestino === "celsius") {
            temperaturaConvertida = temperaturaOriginal - 273.15;
        } else if (unidadeDestino === "fahrenheit") {
            temperaturaConvertida = (temperaturaOriginal - 273.15) * 9/5 + 32;
        } else if (unidadeDestino === "hobold") {
            temperaturaConvertida = (temperaturaOriginal - 273.15) / 1.5;
        } else {
            temperaturaConvertida = temperaturaOriginal;
        }
    } else if (unidadeOriginal === "hobold") {
        if (unidadeDestino === "celsius") {
            temperaturaConvertida = temperaturaOriginal * 1.5;
        } else if (unidadeDestino === "fahrenheit") {
            temperaturaConvertida = temperaturaOriginal * 1.5 * 9/5 + 32;
        } else if (unidadeDestino === "kelvin") {
            temperaturaConvertida = temperaturaOriginal * 1.5 + 273.15;
        } else {
            temperaturaConvertida = temperaturaOriginal;
        }
    }

    // Exibir o resultado
    alert("A temperatura convertida é: " + temperaturaConvertida.toFixed(2) + " " + unidadeDestino);

    let titulo = document.getElementById("conversorForm");
    console.log(titulo);
}