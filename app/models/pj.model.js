const sql = require("./db.js");

// Construtor
const Pj = function (pj) {
    this.idPJ = pj.idPJ;
    this.idJogador = pj.idJogador;
    this.nomePJ = pj.nomePJ;
    this.racaPJ = pj.racaPJ;
    this.classePJ = pj.classePJ;
    this.xpPJ = pj.xpPJ;
};
// Criar um novo Pj
Pj.create = (newPj, result) => {
    sql.query("INSERT INTO PersonagemJogavel SET ?", newPj, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        console.log("Pj criado com sucesso: ", { idPJ: res.insertId, ...newPj });
        result(null, { idPJ: res.insertId, ...newPj })
    })
};
// GET todos os Pjs
Pj.getAll = result => {
    sql.query("SELECT * FROM PersonagemJogavel", (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        console.log("Pj encontrados: ", res);
        result(null, res)
    })
}
// GET Pj pelo ID
Pj.findByID = (idPJ, result) => {
    sql.query(`SELECT * FROM PersonagemJogavel WHERE idPJ = ${idPJ}`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra o PJ encontrado
        if (res.length) {
            console.log("PJ encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// GET Pjs pelo NOME
Pj.findByNome = (nomePJ, result) => {
    sql.query(`SELECT * FROM PersonagemJogavel WHERE nomePJ = '${nomePJ}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra os PJs encontrados
        if (res.length) {
            console.log("Pjs encontrados: ", res);
            result(null, res);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// GET Pjs pela raça
Pj.findByRaca = (racaPJ, result) => {
    sql.query(`SELECT * FROM PersonagemJogavel WHERE racaPJ = '${racaPJ}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra os PJs encontrados
        if (res.length) {
            console.log("Pjs encontrados: ", res);
            result(null, res);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// GET Pjs pela Classe
Pj.findByClasse = (classePJ, result) => {
    sql.query(`SELECT * FROM PersonagemJogavel WHERE classePJ = '${classePJ}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra os PJs encontrados
        if (res.length) {
            console.log("Pjs encontrados: ", res);
            result(null, res);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// GET Pjs pelo idjogador
Pj.findByIdJogador = (idJogador, order ,result) => {
    sql.query(`SELECT * FROM PersonagemJogavel WHERE idJogador = '${idJogador}' order by ${order}`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra os PJs encontrados
        if (res.length) {
            console.log("Pjs encontrados: ", res);
            result(null, res);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// UPDATE Pj pelo ID
Pj.updateById = (idPJ, pj, result) => {
    sql.query("UPDATE PersonagemJogavel SET nomePJ = ? , racaPJ = ? , classePJ = ? , xpPJ = ? WHERE idPJ = ?", [pj.nomePJ, pj.racaPJ, pj.classePJ, pj.xpPJ, idPJ], (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return;
        }
        console.log("Pj atualizado com sucesso: ", { idPJ: idPJ, ...pj });
        result(null, { idPJ: idPJ, ...pj })
    })
}
// DELETE jogador pelo ID
Pj.removeById = (idPJ, result) => {
    sql.query("DELETE FROM PersonagemJogavel WHERE idPJ = ?", idPJ, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return;
        }
        console.log(`Pj de idPJ: ${idPJ} DELETADO com Sucesso !!!`);
        result(null, res)
    })
}
// DELETE Todos os Jogadores
Pj.removeAll = result => {
    sql.query("DELETE FROM PersonagemJogavel", (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        console.log(`Foram deletados: ${res.affectedRows} Pjs!!!`);
        result(null, res)
    })
}

module.exports = Pj;