import { FcLock, FcReading } from "react-icons/fc";

import { useNavigate } from 'react-router-dom'
import React from "react";
import Style from "../../css/main/stylesMainLogin.module.css"
import Logo from "../../images/LogoRPG.png"
import Axios from 'axios';

function MainLogin() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/logued/UserPage")
    }

    function Logar() {
        var nome = document.getElementById("inputNome").value.trim();
        var senha = document.getElementById("inputSenha").value.trim();
        var checkBox = document.getElementById("checkBox")
        const options = {
            method: 'GET',
            url: `http://localhost:3001/api/jogador/nomeSenha/${nome}/${senha}`
        };
        Axios.request(options).then(function (response) {
            console.log("Achou")
            if (checkBox.checked) {
                localStorage.setItem("jogador", JSON.stringify(response.data))
            }
            sessionStorage.setItem("jogador", JSON.stringify(response.data))
            handleClick()
        }).catch(function (error) {
            return 0;
        });
    }


    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
                    <img src={Logo} alt="Logo" className={Style.Logo} />
                    <div className={Style.Form}>
                        <p className={Style.Text}>
                            <FcReading />APELIDO
                        </p>
                        <input type="text" id="inputNome" className={Style.Input} placeholder="Ex: DungeonMaster" />
                        <br />
                        <p className={Style.Text}>
                            <FcLock /> SENHA
                        </p>
                        <input type="password" id="inputSenha" className={Style.Input} placeholder="Ex: DungeonMaster123" />
                        <div className={Style.Flex}>
                            <input type="checkbox" name="" id="checkBox" />
                            <p>MANTER-ME CONECTADO</p>
                        </div>
                        <button className={Style.Btt} to="/Login" onClick={Logar}>
                            <p> LOGAR </p>
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLogin