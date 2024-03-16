
function calcularRecomendacao() {
    var rendaMensal = parseFloat(document.getElementById("rendaMensal").value);
    var gastosMensais = parseFloat(document.getElementById("gastosMensais").value);
    var metaEconomia = parseFloat(document.getElementById("metaEconomia").value);
    var porcentagemRendimento = parseFloat(document.getElementById("porcentagemRendimento").value);

    var ganhosMensais = rendaMensal - gastosMensais;

    var economiaMensal = metaEconomia / porcentagemRendimento;

    var mesesNecessarios = Math.ceil(metaEconomia / economiaMensal);

    var recomendacaoInicial = economiaMensal * 0.5; 
    var recomendacaoFinal = economiaMensal * 1.5;

    var recomendacaoElement = document.getElementById("recomendacao");
    recomendacaoElement.textContent = "Para alcançar sua meta de economia em " + mesesNecessarios + " meses, recomenda-se guardar mensalmente entre R$ " + recomendacaoInicial.toFixed(2) + " e R$ " + recomendacaoFinal.toFixed(2) + ".";
}
