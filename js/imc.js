// Função para calcular o IMC
function calcularIMC() {
    // Obter os valores de peso e altura do usuário
    var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
    var altura = parseFloat(prompt("Digite sua altura em metros:"));

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Arredondar o IMC para duas casas decimais
    imc = imc.toFixed(2);

    // Exibir o resultado
    alert("Seu Índice de Massa Corporal (IMC) é: " + imc);
}

// Chamar a função para calcular o IMC
calcularIMC();