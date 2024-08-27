let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;
let campoComedia;
let campoTerror;
let botaoRecomendar;
let recomendacao;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  
  // Título
  let titulo = createElement('h2', 'Recomendador de Filmes');
  titulo.position(300, 20);

  // Idade
  createSpan('Sua idade:').position(100, 100);
  campoIdade = createInput('5');
  campoIdade.position(200, 100);
  campoIdade.size(100);

  // Preferências
  campoFantasia = createCheckbox('Gosta de Fantasia?', false).position(100, 150);
  campoAventura = createCheckbox('Gosta de Aventura?', false).position(100, 180);
  campoDrama = createCheckbox('Gosta de Drama?', false).position(100, 210);
  campoComedia = createCheckbox('Gosta de Comédia?', false).position(100, 240);
  campoTerror = createCheckbox('Gosta de Terror?', false).position(100, 270);

  // Botão de recomendação
  botaoRecomendar = createButton('Obter Recomendação');
  botaoRecomendar.position(300, 320);
  botaoRecomendar.mousePressed(atualizarRecomendacao);

  // Recomendação
  recomendacao = createElement('h3', '');
  recomendacao.position(200, 400);
  recomendacao.style('color', '#4c0073');
  recomendacao.style('font-size', '24px');
}

function draw() {
  background(230);  // Cor de fundo suave
}

function atualizarRecomendacao() {
  let idade = int(campoIdade.value()); // Converter para número inteiro
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeTerror = campoTerror.checked();
  
  let [filme, plataforma] = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeDrama, gostaDeComedia, gostaDeTerror);
  
  recomendacao.html(`${filme}<br><small>Disponível em: ${plataforma}</small>`);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeDrama, gostaDeComedia, gostaDeTerror) {
  if (idade >= 18) {
    if (gostaDeTerror) {
      return ["Corra!", "Netflix"];
    } else if (gostaDeDrama) {
      return ["A Vida é Bela", "Amazon Prime"];
    } else if (gostaDeAventura) {
      return ["Mad Max: Estrada da Fúria", "HBO Max"];
    } else if (gostaDeComedia) {
      return ["O Grande Hotel Budapeste", "Disney+"];
    } else {
      return ["O Poderoso Chefão", "Paramount+"];
    }
  } else if (idade >= 16) {
    if (gostaDeTerror) {
      return ["Hereditário", "Netflix"];
    } else if (gostaDeFantasia) {
      return ["O Senhor dos Anéis", "Amazon Prime"];
    } else if (gostaDeAventura) {
      return ["Indiana Jones", "Disney+"];
    } else if (gostaDeDrama) {
      return ["O Jogo da Imitação", "HBO Max"];
    } else {
      return ["Scott Pilgrim Contra o Mundo", "Netflix"];
    }
  } else if (idade >= 14) {
    if (gostaDeFantasia) {
      return ["Harry Potter e o Cálice de Fogo", "HBO Max"];
    } else if (gostaDeAventura) {
      return ["Os Vingadores", "Disney+"];
    } else if (gostaDeComedia) {
      return ["Superbad", "Amazon Prime"];
    } else if (gostaDeDrama) {
      return ["O Menino do Pijama Listrado", "Netflix"];
    } else {
      return ["Em Busca da Felicidade", "Netflix"];
    }
  } else if (idade >= 12) {
    if (gostaDeFantasia && gostaDeAventura) {
      return ["Homem-Aranha: No Aranhaverso", "Disney+"];
    } else if (gostaDeComedia) {
      return ["Jumanji: Bem-vindo à Selva", "Amazon Prime"];
    } else if (gostaDeDrama) {
      return ["Extraordinário", "Netflix"];
    } else {
      return ["A Origem dos Guardiões", "Netflix"];
    }
  } else if (idade >= 10) {
    if (gostaDeFantasia) {
      return ["A Viagem de Chihiro", "Netflix"];
    } else if (gostaDeComedia) {
      return ["O Expresso Polar", "HBO Max"];
    } else if (gostaDeAventura) {
      return ["As Aventuras de Tintim", "Netflix"];
    } else {
      return ["Matilda", "Netflix"];
    }
  } else {
    if (gostaDeFantasia) {
      return ["O Mágico de Oz", "Amazon Prime"];
    } else if (gostaDeAventura) {
      return ["Procurando Nemo", "Disney+"];
    } else if (gostaDeComedia) {
      return ["Meu Malvado Favorito", "Netflix"];
    } else {
      return ["Toy Story", "Disney+"];
    }
  }
}
