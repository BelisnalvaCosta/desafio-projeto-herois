## Jogo do Herói — Galeria de Personagens

Um pequeno projeto em HTML, CSS e JavaScript onde o usuário seleciona um herói e pode executar um ataque. Ideal para aprender manipulação do DOM, eventos e manipulação de imagens.

### O que este projeto faz

- Mostra uma galeria de heróis (cada um com uma imagem).  
- Ao clicar em um herói, seus dados (nome, idade e tipo) são exibidos.  
- O botão `Atacar` fica habilitado somente após a seleção do herói e mostra uma mensagem com o ataque correspondente.

### Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)

### Como executar (rápido)

1. Certifique-se de ter os arquivos `index.html`, `styles.css` e `script.js` na pasta do projeto (já presentes nesta pasta).  
2. Coloque as imagens dos heróis na pasta `imagens/` com os nomes usados pelo projeto (ex.: `guerreira.png`, `mago.png`, `monge.png`, `ninja.png`, `arqueira.png`, `assassino.png`).  
3. Abra `index.html` no seu navegador (duplo clique ou arraste para o navegador).  

Observação: não é necessária instalação de dependências — é um projeto estático.

### Estrutura do repositório

```
3-Herois-imagens/
├─ index.html        # página principal do jogo
├─ script.js         # lógica de seleção e ataque
├─ styles.css        # estilos visuais
├─ imagens/          # coloque aqui as imagens dos heróis
└─ Readme.md         # documentação (este arquivo)
```

### Heróis incluídos (exemplos)

- Guerreira — ataque: Corte poderoso
- Mago — ataque: Bola de fogo
- Monge — ataque: Golpe sereno
- Ninja — ataque: Shuriken rápido
- Arqueira — ataque: Flecha certeira
- Assassino — ataque: Golpe furtivo

Os nomes e ataques podem ser ajustados em `script.js` — procure o array/objeto que contém os heróis.

### Como adicionar/alterar imagens

1. Adicione a imagem em `imagens/` com o nome esperado pelo código.  
2. Se necessário, ajuste o caminho da imagem em `index.html` ou em `script.js` conforme a implementação.

### Contribuições

Contribuições são bem-vindas. Para sugestões simples, abra uma issue. Para código, por favor faça um fork, crie uma branch com sua feature/fix e abra um pull request descrevendo a alteração.

### Licença

Este projeto pode ser usado livremente. Recomendo adicionar uma licença (por exemplo, MIT) se você pretende compartilhar publicamente.

### Autor / Contato

Projeto criado por BelisnalvaCosta — disponível neste repositório. Para dúvidas e sugestões, abra uma issue no GitHub.
