const Jogador = require("../models/jogador.model.js");

// Cadastrar e salvar um novo Jogador
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Campo não pode estar vazio !!!"
        });
    }
    const jogador = new Jogador({
        nomeJogador: req.body.nomeJogador,
        senhaJogador: req.body.senhaJogador
    });

    Jogador.create(jogador, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send(data);
        }
    })
}
// Pegando todos os Jogadores
exports.findAll = (req, res) => {
    Jogador.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send(data);
        }
    })
}
// Pegando Jogador pelo ID
exports.findOneByID = (req, res) => {
    Jogador.findByID(req.params.idJogador, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum jogador com Id: ${req.params.idJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Jogador com Id: ${req.params.idJogador}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Jogador pelo Nome
exports.findOneByNome = (req, res) => {
    Jogador.findByNome(req.params.nomeJogador, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum jogador com Nome: ${req.params.nomeJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Jogador com Nome: ${req.params.nomeJogador}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Jogador pelo Nome e Senha
exports.findOneByNomeAndSenha = (req, res) => {
    Jogador.findByNomeAndSenha(req.params.nomeJogador, req.params.senhaJogador, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum jogador com Nome: ${req.params.nomeJogador} e Senha: ${req.params.senhaJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Jogador com Nome: ${req.params.nomeJogador} e Senha: ${req.params.senhaJogador}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Modificando um Jogador ja existente
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Campo não pode estar vazio !!!"
        });
    }
    Jogador.updateById(req.params.idJogador, new Jogador(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum jogador com idJogador: ${req.params.idJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Jogador com idJogador: ${req.params.idJogador}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Deletar um jogador pelo seu ID
exports.deleteFromId = (req, res) => {
    Jogador.removeById(req.params.idJogador, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum jogador com idJogador: ${req.params.idJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Jogador com idJogador: ${req.params.idJogador}`
                });
            }
        }
        else {
            res.send({
                Message: `Jogador de ID: ${req.params.idJogador}`
            })
        }
    })
}
// Deletar todos os Jogadores
exports.deleteAll = (req, res) => {
    Jogador.removeAll((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message
            });
        }
        else{
            res.send({
                message:"Todos os Jogadores foram deletados com sucesso !!!"
            })
        }
    })
}