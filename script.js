function calcularSustentabilidade() {
    // Pegando o estado dos checkboxes
    const rotacao = document.getElementById('rotacao').checked;
    const direto = document.getElementById('direto').checked;
    const analise = document.getElementById('analise').checked;

    // Elementos de exibição de resultado
    const resultadoDiv = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultado-texto');

    // Contador de pontos
    let pontos = 0;
    if (rotacao) pontos++;
    if (direto) pontos++;
    if (analise) pontos++;

    // Remove classes anteriores para não acumular estilos
    resultadoDiv.className = "result-box";

    // Lógica de avaliação baseada nos pontos obtidos
    if (pontos === 3) {
        resultadoTexto.innerText = "Excelente! Seu manejo do solo é Altamente Sustentável. O Agro Forte agradece!";
        resultadoDiv.classList.add('bom');
    } else if (pontos === 1 || pontos === 2) {
        resultadoTexto.innerText = "Bom começo! Seu manejo é Regular, mas você pode adotar mais práticas para proteger melhor o solo.";
        resultadoDiv.classList.add('regular');
    } else {
        resultadoTexto.innerText = "Atenção! Seu manejo atual está Crítico. Implementar práticas sustentáveis ajudará a proteger sua produtividade.";
        resultadoDiv.classList.add('ruim');
    }
}
