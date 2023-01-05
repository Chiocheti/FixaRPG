module.exports = app => {
    const pj = require('../controllers/pj.controller.js')

    var router = require("express").Router();

    // Cadastrar e salvar um novo Pj
    router.post('/', pj.create);

    // Pegando todos os Pjs
    router.get('/', pj.findAll);

    // Pegando Pj pelo ID
    router.get('/idPJ/:idPJ', pj.findOneByID);

    // Pegando Pj pelo Nome
    router.get('/nomePJ/:nomePJ', pj.findOneByNome);
    
    // Pegando Pj pela Raca
    router.get('/racaPJ/:racaPJ', pj.findOneByRaca);
    
    // Pegando Pj pela Classe
    router.get('/classePJ/:classePJ', pj.findOneByClasse);
    
    // Pegando Pj pelo idJogador
    router.get('/idJogador/:idJogador/:order', pj.findOneByIdJogador);

    // Modificando um Pj ja existente
    router.put('/:idPJ', pj.update);

    // Deletar um Pj pelo seu ID
    router.delete('/:idPJ', pj.deleteFromId);

    // Deletar todos os Pjs
    router.delete('/', pj.deleteAll);

    app.use('/api/pj', router);
}