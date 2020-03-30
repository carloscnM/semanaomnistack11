# Semana OmniStack 11.0
Projeto 'be the hero' Semana OmniStack 11.0


### Be the Hero

"Be the Hero" foi o projeto utilizado durante o curso para exemplificar diversas tecnicas de programação. A mesma tem como intuíto
disponibilizar um portal web para que ongs possa publicar os casos que precisa de doação monetária. O projeto comtempla ainda
uma aplicação mobile para que as pessoas possam conhecer os casos, assim as pessoas podem doar para ong entrando em contato com a mesma
por meio do whatsapp e e-mail. 
 
Aplicação foi desenvolvida durante a semana OmniStack 11.0, curso limitado disponibilizado pela empresa Rocketseat

Conhece mais da Rocketseat em: 

- https://rocketseat.com.br/
- https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg
- @rocketseat_oficial


## Funcionalidades

As funcionalidades da implicação são:

 - Cadastro de Ongs
 - Cadastro de casos
 - Listagem de casos
 - deleção de casos


## BackEnd

O backEnd é composto por uma API RESTfu escrita em javaScript com NODE.js.
O projeto utlizando o banco de dados SQlite com a biblietoca knex (@http://knexjs.org/)

para criação da base utilizar:
$ knex migrate:latest

## FrontEnd e Mobile

O FrontEnd foi desenvolvido utilizando ReactJs e a aplicação mobile React Native a conexão das duas aplicações com a API
foi realizada utilizando a biblioteca axios (@https://github.com/axios/axios).



### Novas implementações

## JWT

+ Jwt

Retorno de token de autorização utilizando a biblioteca JWT. 

Alterações: BackEnd para gerar e validar token,  FrontEnd para receber e retornar token a cada requição. 



