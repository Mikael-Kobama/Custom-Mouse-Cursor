// Seleciona os elementos do cursor (interno e externo) no DOM
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

// Adiciona um ouvinte de evento para o movimento do mouse na página
document.addEventListener("mousemove", moveCursor);

// Função que será chamada sempre que o mouse se mover
function moveCursor(e) {
    // Obtém a posição X e Y do mouse
    let x = e.clientX;
    let y = e.clientY;

    // Atualiza a posição do cursor interno (menor)
    innerCursor.style.left = `${x}px`;  // Atualiza a posição horizontal
    innerCursor.style.top = `${y}px`;   // Atualiza a posição vertical

    // Atualiza a posição do cursor externo (maior)
    outerCursor.style.left = `${x}px`;  // Atualiza a posição horizontal
    outerCursor.style.top = `${y}px`;   // Atualiza a posição vertical
}
