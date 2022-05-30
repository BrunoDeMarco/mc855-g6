# Projeto de MC855 - Grupo 6

Este é o repositório que contém as frentes de desenvolvimento do projeto desenvolvido para a disciplina de MC855, que consiste de um WebApp.

A estrutura consiste basicamente em duas pastas:

/application - Contém os arquivos referentes ao projeto React.

/server - Contém os arquivos referentes ao projeto da API.

## Docker

Está sendo utilizado o Docker para virtualização de ambas as "frentes" do projeto, esse passo é opcional para o ambiente de desenvolvimento, uma vez que é possível rodar as duas aplicações em um ambiente local, porém é interessante estar apto a subir os containers também.
Para subir os containers, é necessário ter o Docker instalado em sua máquina.

-- Explicar sobre o build de ambas as imagens.
-- Explicar sobre o run de ambas as imagens.
-- Explicar sobre o Docker Compose.

## /application

Para rodar a aplicação React, é necessário ter o Node.JS instalado.

Primeiramente, é preciso instalar as dependências do projeto:

`npm install`

Depois, basta rodar o projeto:

`npm start`

## /server

Para rodar o servidor, é necessário ter o Node.JS instalado.

Primeiramente, é preciso instalar as dependências do projeto:

`npm install`

Caso você não possua o Nodemon instalado, é recomendado a instalação, mas esse passo é opcional, sem ele, não será possível ter um "hot reload", mas a API ainda irá funcionar.

`npm install -g nodemon`

Depois, basta rodar o projeto:

`npm start`

Para ter acesso à versão com o Hot Reload (com o Nodemon instalado):

`npm run dev`
