const sql = require("./db.js");

// Construtor
const Jogador = function (jogador) {
    this.idJogador = jogador.idJogador;
    this.nomeJogador = jogador.nomeJogador;
    this.senhaJogador = jogador.senhaJogador;
    this.email = jogador.email;
    this.telefone = jogador.telefone;
};
// Criar um novo jogador
Jogador.create = (newJogador, result) => {
    sql.query("INSERT INTO jogador SET ?", newJogador, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        console.log("Jogador criado com sucesso: ", { idJogador: res.insertId, ...newJogador });
        result(null, { idJogador: res.insertId, ...newJogador })
    })
};
// GET todos os Jogadores
Jogador.getAll = result => {
    sql.query("SELECT * FROM jogador", (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        console.log("Jogadores encontrados: ", res);
        result(null, res)
    })
}
// GET jogador pelo ID
Jogador.findByID = (idJogador, result) => {
    sql.query(`SELECT * FROM jogador WHERE idJogador = ${idJogador}`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra o jogador encontrado
        if (res.length) {
            console.log("Jogador encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        // Nada encontrado
        console.log("Id jogador _-_-_-_-_-_-_" + idJogador )
        result({ kind: "not_found" }, null)
    })
}
// GET jogador pelo NOME
Jogador.findByNome = (nomeJogador, result) => {
    sql.query(`SELECT * FROM jogador WHERE nomeJogador = '${nomeJogador}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        // Mostra o jogador encontrado
        if (res.length) {
            console.log("Jogador encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        // Nada encontrado
        result({ kind: "not_found" }, null)
    })
}
// GET jogador pelo NOME e SENHA
Jogador.findByNomeAndSenha = (nomeJogador, senhaJogador, result) => {
    sql.query(`SELECT * FROM jogador WHERE  nomeJogador = '${nomeJogador}' AND senhaJogador = '${senhaJogador}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Jogador encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null)
    })
}
// GET jogador pelo EMAIL
Jogador.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM jogador WHERE  email = '${email}'`, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Jogador encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null)
    })
}
// UPDATE jogador pelo ID
Jogador.updateById = (idJogador, jogador, result) => {
    sql.query("UPDATE jogador SET nomeJogador = ? , senhaJogador = ? , email = ? , telefone = ? WHERE idJogador = ?", [jogador.nomeJogador, jogador.senhaJogador, jogador.email, jogador.telefone, idJogador], (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return;
        }
        console.log("Jogador atualizado com sucesso: ", { idJogador: idJogador, ...jogador });
        result(null, { idJogador: idJogador, ...jogador })
    })
}
// DELETE jogador pelo ID
Jogador.removeById = (idJogador, result) => {
    sql.query("DELETE FROM jogador WHERE idJogador = ?", idJogador, (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return;
        }
        console.log(`Jogador de idJogador: ${idJogador} DELETADO com Sucesso !!!`);
        result(null, res)
    })
}
// DELETE Todos os Jogadores
Jogador.removeAll = result => {
    sql.query("DELETE FROM jogador", (err, res) => {
        if (err) {
            console.log("Houve um erro: ", err);
            result(null, err);
            return;
        }
        console.log(`Foram deletados: ${res.affectedRows} jogadores!!!`);
        result(null, res)
    })
}

module.exports = Jogador;