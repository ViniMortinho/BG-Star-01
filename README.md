# BG-Star-01
## Descrição

Este repositório contém um projeto de uma página web que exibe um efeito de fundo animado, simulando o espaço sideral com estrelas. O efeito é criado usando múltiplas camadas de imagens de estrelas que se movem em velocidades diferentes, criando uma ilusão de profundidade e imersão. Além disso, a página também apresenta um cursor personalizado que se expande ao clicar.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

* `index.html`: Este é o arquivo principal que contém a estrutura da página web.
* `style.css`: Este arquivo contém todos os estilos CSS aplicados na página.
* `script.js`: Este arquivo contém o código JavaScript que adiciona interatividade à página.

## Detalhes do Código

### HTML

O arquivo `index.html` é uma página web padrão que inclui links para os arquivos CSS e JavaScript. A estrutura principal da página é uma div com a classe "container", que contém várias divs para criar o efeito de estrelas no fundo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Efeito de Fundo Animado</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="star"></div>
    <div class="star"></div>
    ...
  </div>
</body>
</html>


### CSS

O arquivo `style.css` contém os estilos para a página. Ele inclui estilos para o corpo da página, o efeito de estrelas e o cursor personalizado. O cursor é estilizado para se parecer com um círculo e expande quando o usuário clica na página.

css
body {
  background-color: #000;
}

.container {
  width: 100%;
  height: 100%;
}

.star {
  width: 10px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  animation: move 1s linear infinite;
}

@keyframes move {
  0% {
    top: 0;
    left: 0;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

.cursor {
  width: 10px;
  height: 10px;
  background-color: #fff;
  position: absolute;
}

.cursor:hover {
  width: 20px;
  height: 20px;
}


### JavaScript

O arquivo `script.js` adiciona interatividade ao cursor. Ele muda a posição do cursor para seguir o movimento do mouse e adiciona uma animação de expansão ao cursor quando o usuário clica na página.

javascript
// Obtém o cursor
const cursor = document.querySelector(".cursor");

// Atualiza a posição do cursor
function updateCursorPosition() {
  cursor.style.top = window.pageYOffset + window.mouseY;
  cursor.style.left = window.pageXOffset + window.mouseX;
}

// Eventos de mouse
window.addEventListener("mousemove", updateCursorPosition);
window.addEventListener("click", function() {
  cursor.style.width = 20;
  cursor.style.height = 20;
});


## Como Usar

Para usar este projeto, você pode clonar o repositório e abrir o arquivo `index.html` em seu navegador.

## Contribuições

Todas as contribuições são bem-vindas! Se você tem sugestões de melhorias, correções de bugs ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou um pull request.



