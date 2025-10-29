// Definição da classe Heroi
class Heroi {
  constructor(nome, idade, tipo, imagem, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.imagem = imagem;
    this.ataque = ataque;
  }

  // Método atacar
  atacar() {
    return `O ${this.tipo} atacou usando ${this.ataque}`;
  }
}

// Criando os heróis com mais opções de ataque
const herois = [
  new Heroi('Guerreira', 35, 'Guerreira', './imagens/espada.png', 'espada'),
  new Heroi('Gandalf', 1000, 'Mago', './imagens/mago.png', 'magia'),
  new Heroi('Kaito', 45, 'Monge', './imagens/monge.png', 'artes marciais'),
  new Heroi('Bruce', 28, 'Ninja', './imagens/ninja.png', 'shuriken'),
  new Heroi('Legolas', 150, 'Arqueira', './imagens/arqueira.png', 'arco'),
  new Heroi('Zane', 30, 'Assassino', './imagens/assassino.png', 'adagas')
];

// Referências dos elementos do DOM
const nomeElement = document.getElementById('nome');
const idadeElement = document.getElementById('idade');
const tipoElement = document.getElementById('tipo');
const resultadoElement = document.getElementById('resultado');
const botaoAtacar = document.getElementById('atacar-btn');

// Função para exibir informações do herói
function exibirHeroi(heroi) {
  nomeElement.textContent = heroi.nome;
  idadeElement.textContent = heroi.idade;
  tipoElement.textContent = heroi.tipo;
  botaoAtacar.disabled = false;  // Habilita o botão "Atacar"
  resultadoElement.textContent = ''; // Limpa o resultado anterior
  resultadoElement.classList.remove('show'); // Remove a classe de animação
}

// Evento de clique nos heróis para selecionar
document.querySelectorAll('.heroi').forEach((element, index) => {
  element.addEventListener('click', () => {
    exibirHeroi(herois[index]);
  });
});

// Função para mostrar o ataque
function mostrarAtaque() {
  const mensagem = herois.find(heroi => heroi.nome === nomeElement.textContent).atacar();
  resultadoElement.textContent = mensagem;
  resultadoElement.classList.add('show');
  setTimeout(() => {
    resultadoElement.classList.remove('show');
  }, 3000);
}

// Evento de clique no botão "Atacar"
botaoAtacar.addEventListener('click', mostrarAtaque);