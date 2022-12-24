import {
    FcIphone,
    FcGoogle,
    FcLock,
    FcDecision
} from "react-icons/fc";

import { useNavigate } from 'react-router-dom'
import React from "react"
import Style from "../../css/main/stylesMainCadastro.module.css"
import Axios from 'axios';

function MainCadastro() {

    const navigate = useNavigate();

    function handleClick(){
        navigate("/Login")
    }

    function formatadorDeTelefone(telefone) {
        telefone = telefone.replace(/^(\d{2})(\d)/g, "($1)$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        var novoTelefone = telefone.replace(/(\d)(\d{5})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        console.log('Telefone formatado:')
        console.log(novoTelefone)
        return novoTelefone;
    }

    function formataPraSalvar(telefone) {
        let part1 = telefone.slice(0, 8)
        let part2 = telefone.slice(9, 10)
        let part3 = telefone.slice(10,)
        let telefoneParaSalvar = `${part1}${part2}-${part3}`
        return telefoneParaSalvar
    }

    function testaTelefone(telefone) {
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        return regex.test(telefone);
    }

    async function CriarConta() {
        var email = document.getElementById("inputEmail").value.trim()
        var nome = document.getElementById("inputNome").value.trim()
        var telefone = document.getElementById("inputTelefone").value.trim()
        var telefoneFormatado = formatadorDeTelefone(telefone).trim();
        var senha = document.getElementById("inputSenha").value.trim()
        var repeteSenha = document.getElementById("inputRepeteSenha").value.trim()

        if (email == "" || email == null) {
            console.log("Email Vazio!!!!")
            return 0;
        }
        else {
            // Verificando se email ja esta em uso
            const options = {
                method: 'GET',
                url: `http://localhost:3001/api/jogador/email/${email}`
            };
            await Axios.request(options).then(function (response) {
                console.log("Email ja em uso!!!!")
                return 0;
            }).catch(function (error) {
                // Verificando se Nome ja esta em uso
                if (nome == "" || nome == null) {
                    console.log("Nome Vazio!!!!")
                    return 0;
                }
                else {
                    // Verifica e valida telefone
                    if (telefone.length != 11 || isNaN(telefone) || !testaTelefone(telefoneFormatado)) {
                        console.log("Formato de Telefone Invalido!!!!")
                        return 0;
                    }
                    else {
                        // Verifica e valida a Senha
                        if (senha == "" || senha == null) {
                            console.log("Digite um valor valido para a senha!!!")
                            return 0;
                        }
                        if (senha != repeteSenha) {
                            console.log("Senhas não conferem!!!")
                            return 0;
                        }
                        else {
                            var telefoneParaSalvar = formataPraSalvar(telefoneFormatado)
                            const save = {
                                method: 'POST',
                                url: 'http://localhost:3001/api/jogador',
                                headers: { 'Content-Type': 'application/json' },
                                data: { nomeJogador: nome, senhaJogador: senha, email: email, telefone: telefoneParaSalvar }
                            };
                            Axios.request(save).then(function (response) {
                                console.log(response.data);
                                handleClick()
                            }).catch(function (error) {
                                console.error(error);
                            });
                        }
                    }
                }
            });
        }


    }
    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
                    <div className={Style.Form}>

                        <p className={Style.Text}>
                            <FcIphone /> &nbsp; TELEFONE
                        </p>
                        <input type="text" id="inputTelefone" className={Style.Input} placeholder="Apenas os NUMEROS" />

                        <p className={Style.Text}>
                            <FcGoogle /> &nbsp; EMAIL
                        </p>
                        <input type="email" id="inputEmail" className={Style.Input} placeholder="Ex: dungeonMaster@gmail.com" />

                        <p className={Style.Text}>
                            <FcDecision /> &nbsp; APELIDO
                        </p>
                        <input type="text" id="inputNome" className={Style.Input} placeholder="Ex: Dungon Master" />

                        <p className={Style.Text}>
                            <FcLock /> &nbsp; SENHA
                        </p>
                        <input type="text" id="inputSenha" className={Style.Input} />

                        <p className={Style.Text}>
                            <FcLock /> &nbsp; REPETIR SENHA
                        </p>
                        <input type="text" id="inputRepeteSenha" className={Style.Input} />

                        <button className={Style.Btt} to="/Login" onClick={CriarConta}>
                            <p> CADASTRAR </p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCadastro