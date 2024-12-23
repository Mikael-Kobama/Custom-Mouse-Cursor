# Custom Cursor

Este projeto tem como objetivo criar um **cursor customizado** para a página. O cursor é composto por dois elementos: o **cursor interno** (menor) e o **cursor externo** (maior). O efeito de interação é dado pela mudança de tamanho do cursor maior ao passar sobre links ou botões.

## Funcionalidades

1. **Cursor Interno**:
   - Um pequeno círculo que segue o movimento do mouse.
   - O cursor interno tem um efeito de contraste com o fundo usando `mix-blend-mode: difference`.

2. **Cursor Externo**:
   - Um círculo maior com uma borda visível.
   - Ao passar sobre links ou botões, o cursor externo aumenta de tamanho para indicar interatividade.

3. **Efeitos de Hover**:
   - Os links e botões têm efeitos de hover que alteram a cor de fundo e aplicam uma animação de **scale**.

4. **Responsividade**:
   - O layout é fluido e se ajusta a diferentes tamanhos de tela.

## Tecnologias Utilizadas:

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização avançada, incluindo `transition`, `mix-blend-mode`, e animações.
- **JavaScript**: Manipulação de eventos de movimento do mouse e atualização das posições dos cursores.

## Como Rodar:

1. Clone o repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. O cursor customizado será ativado automaticamente.

## Melhorias Possíveis:

- Adicionar um efeito de "clique" visual nos cursores ao pressionar o botão do mouse.
- Personalizar o estilo para diferentes tipos de interatividade.
