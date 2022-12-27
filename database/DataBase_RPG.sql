create database RPG;

use RPG;

create table if not exists Jogador(
	idJogador int primary key auto_increment,
    nomeJogador varchar(255),
    senhaJogador varchar(255),
    email varchar(255),
    telefone varchar(255)
);

create table if not exists PersonagemJogavel(
	idPJ int primary key auto_increment,
    idJogador int,
    nomePJ varchar(255),
    racaPJ varchar(255),
    classePJ varchar(255),
    xpPJ int,
    foreign key (idJogador) references jogador(idJogador)
);

create table if not exists Atributos(
	idPJ int primary key,
    atribForca int,
    atribDestreza int,
    atribConstituicao int,
    atribInteligencia int,
    atribSabedoria int,
    atribCarisma int,
    foreign key (idPJ) references PersonagemJogavel(idPJ)
);

select * from jogador;