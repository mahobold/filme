document.getElementById("key").textContent = "rejuersnhjhjbfdbnjrfmrekjdvnjrejknverij";

document.getElementById("key").style.backgroundColor = "green";

document.querySelector("img").setAttribute("src", "imagens/aladdin.jpeg");

function gerarCorAleatoria() {
    const letrasHex = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  // Função para mudar a cor de fundo
  function mudarCorDeFundo() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
  }

  // Adiciona um ouvinte de evento ao botão
  document.getElementById('botao').addEventListener('click', mudarCorDeFundo);

  function adicionarCard() {
    // Cria um elemento de card
    var card = document.createElement("div");
    card.className = "col d-flex justify-content-center";
    card.innerHTML = `
        <div class="card elementoo" style="width: 18rem;">
            <img src="imagens/avatar.jfif" class="card-img-top elementooo" alt="...">
            <div class="card-body">
                <h5 class="card-title">Avatar</h5>
                <p class="card-text">No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.</p>
                <a href="https://www.youtube.com/watch?v=G1fymUSI4cc" target="_blank" class="btn btn-primary elemento">Ver trailer</a>
            </div>
        </div>
    `;

    // Adiciona o card ao container
    var container = document.getElementById("container");
    container.appendChild(card);
}

function adicionarSerie() {
  // Cria um elemento de card
  var card = document.createElement("div");
  card.className = "col d-flex justify-content-center";
  card.innerHTML = `
      <div class="card elementoo" style="width: 18rem;">
          <img src="imagens/sombra.jpg" class="card-img-top elementooo" alt="...">
          <div class="card-body">
              <h5 class="card-title">Sombra e Ossos</h5>
              <p class="card-text">Nesse mundo não muito diferente da Rússia imperial, vive Alina Starkov (Jessie Mei Li), uma órfã que foi recrutada como cartógrafa pelo Primeiro Exército do czar. A missão de Alina é acompanhar os Grishas, figuras mágicas responsáveis por combater as forças malignas da barreira.</p>
              <a href="https://www.youtube.com/watch?v=jLKiB0kNk5A" target="_blank" class="btn btn-primary elemento">Ver trailer</a>
          </div>
      </div>
  `;

  // Adiciona o card ao container
  var container = document.getElementById("conta");
  container.appendChild(card);
}