const Pj = require("../models/pj.model.js");

// Cadastrar e salvar um novo Pj
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Campo não pode estar vazio !!!"
        });
    }
    const pj = new Pj({
        idJogador : req.body.idJogador,
        nomePJ : req.body.nomePJ,
        racaPJ : req.body.racaPJ,
        classePJ : req.body.classePJ,
        xpPJ : req.body.xpPJ
    });

    Pj.create(pj, (err, data) => {
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
// Pegando todos os Pjs
exports.findAll = (req, res) => {
    Pj.getAll((err, data) => {
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
// Pegando Pj pelo ID
exports.findOneByID = (req, res) => {
    Pj.findByID(req.params.idPJ, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com Id: ${req.params.idPJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com Id: ${req.params.idPJ}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Pj pelo Nome
exports.findOneByNome = (req, res) => {
    Pj.findByNome(req.params.nomePJ, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com Nome: ${req.params.nomePJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com Nome: ${req.params.nomePJ}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Pj pela Raca
exports.findOneByRaca = (req, res) => {
    Pj.findByRaca(req.params.racaPJ, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com Raca: ${req.params.racaPJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com Raca: ${req.params.racaPJ}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Pj pela Classe
exports.findOneByClasse = (req, res) => {
    Pj.findByClasse(req.params.classePJ, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com Classe: ${req.params.classePJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com classePJ: ${req.params.classePJ}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Pegando Pj pelo idJogador
exports.findOneByIdJogador = (req, res) => {
    Pj.findByIdJogador(req.params.idJogador, req.params.order, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj do Jogador: ${req.params.idJogador} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj do Jogador: ${req.params.idJogador}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}

// Modificando um Pj ja existente
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Campo não pode estar vazio !!!"
        });
    }
    Pj.updateById(req.params.idPJ, new Pj(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com idPJ: ${req.params.idPJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com idPJ: ${req.params.idPJ}`
                });
            }
        }
        else {
            res.send(data)
        }
    })
}
// Deletar um Pj pelo seu ID
exports.deleteFromId = (req, res) => {
    Pj.removeById(req.params.idPJ, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Nenhum Pj com idPJ: ${req.params.idPJ} encontrado`
                });
            }
            else {
                res.status(500).send({
                    message: `Erro ao achar Pj com idPJ: ${req.params.idPJ}`
                });
            }
        }
        else {
            res.send({
                Message: `Pj de ID: ${req.params.idPJ}`
            })
        }
    })
}
// Deletar todos os Jogadores
exports.deleteAll = (req, res) => {
    Pj.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send({
                message: "Todos os Pjs foram deletados com sucesso !!!"
            })
        }
    })
}