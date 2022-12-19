module.exports = app => {
    const jogador = require('../controllers/jogador.controller.js')

    var router = require("express").Router();

    // Cadastrar e salvar um novo Jogador
    router.post('/', jogador.create);

    // Pegando todos os Jogadores
    router.get('/', jogador.findAll);

    // Pegando Jogador pelo ID
    router.get('/idJogador/:idJogador', jogador.findOneByID);

    // Pegando Jogador pelo Nome
    router.get('/nomeJogador/:nomeJogador', jogador.findOneByNome);

    // Pegando Jogador pelo Nome e Senha
    router.get('/nomeSenha/:nomeJogador/:senhaJogador', jogador.findOneByNomeAndSenha);

    // Modificando um Jogador ja existente
    router.put('/:idJogador', jogador.update);

    // Deletar um jogador pelo seu ID
    router.delete('/:idJogador', jogador.deleteFromId);

    // Deletar um jogador pelo seu ID
    router.delete('/', jogador.deleteAll);

    app.use('/api/jogador', router);
}