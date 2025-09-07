# Desafio: Classificador de Nível de Herói

Este projeto é uma solução para o desafio "Classificador de Nível de Herói" proposto pela Digital Innovation One (DIO).

## 🎯 Objetivo

O objetivo é criar um programa que armazena o nome e a quantidade de experiência (XP) de um herói. Com base na quantidade de XP, o programa classifica o herói em um dos seguintes níveis:

-   **Ferro**: Se XP for menor do que 1.000
-   **Bronze**: Se XP for entre 1.001 e 2.000
-   **Prata**: Se XP for entre 2.001 e 5.000
-   **Ouro**: Se XP for entre 5.001 e 7.000
-   **Platina**: Se XP for entre 7.001 e 8.000
-   **Ascendente**: Se XP for entre 8.001 e 9.000
-   **Imortal**: Se XP for entre 9.001 e 10.000
-   **Radiante**: Se XP for maior ou igual a 10.001

Ao final, o programa deve exibir a mensagem:
`"O Herói de nome {nome} está no nível de {nivel}"`

## 🚀 Solução Implementada

A solução foi desenvolvida utilizando HTML, CSS e JavaScript, criando uma interface web simples para interagir com o classificador.

-   `index.html`: Estrutura a página web com campos para inserir o nome do herói e a sua quantidade de XP, além de um botão para executar a classificação.
-   `index.js`: Contém a lógica principal. A função `calcularElo()` lê os valores inseridos pelo usuário, utiliza uma estrutura de decisão (`if-else if-else`) para determinar o nível correspondente e exibe o resultado na tela.
-   `style.css`: Fornece uma estilização básica para a página.

## 💻 Como Executar

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  Digite o nome do herói e a quantidade de XP nos campos indicados.
4.  Clique no botão "Ver Elo" para ver a classificação.
