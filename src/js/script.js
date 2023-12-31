const chaveDaApi = "5cacb53954414f369db170023232611";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;
    
    if(!cidade) return alert("Por favor, digite o nome de uma cidade.");

    const dados = await buscarDadosDaCidade(cidade);
    
    if(dados) preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) return alert("Por favor, retire o acento ou verifique se o nome está correto!");

    const dados = response.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const umidade = dados.current.humidity;
    const velocidadeDoVentos = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;



    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura}  ºC`;

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("umidade").textContent = `${umidade}% `;

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVentos}km/h`;

    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)
}