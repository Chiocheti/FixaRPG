import { useEffect, useState } from "react";
import Style from "../../css/fixa/stylesHead.module.css"

function Head() {

    var [nomeJogador, setNomeJogador] = useState(() => "null")
    var [nivel, setNivel] = useState(() => 1)
    var [experience, setExperience] = useState(() => 0)

    function calcNivel(valor) {
        if (valor >= 0 && valor < 300) {
            setNivel(() => 1)
            console.log("Nivel: " + nivel)
        } else if (valor >= 300 && valor < 900) {
            setNivel(() => 2)
            console.log("Nivel: " + nivel)
        } else if (valor >= 900 && valor < 2700) {
            setNivel(() => 3)
            console.log("Nivel: " + nivel)
        } else if (valor >= 2700 && valor < 6500) {
            setNivel(() => 4)
            console.log("Nivel: " + nivel)
        } else if (valor >= 6500 && valor < 14000) {
            setNivel(() => 5)
            console.log("Nivel: " + nivel)
        } else if (valor >= 14000 && valor < 23000) {
            setNivel(() => 6)
            console.log("Nivel: " + nivel)
        } else if (valor >= 23000 && valor < 34000) {
            setNivel(() => 7)
            console.log("Nivel: " + nivel)
        } else if (valor >= 34000 && valor < 48000) {
            setNivel(() => 8)
            console.log("Nivel: " + nivel)
        } else if (valor >= 48000 && valor < 64000) {
            setNivel(() => 9)
            console.log("Nivel: " + nivel)
        } else if (valor >= 64000 && valor < 85000) {
            setNivel(() => 10)
            console.log("Nivel: " + nivel)
        } else if (valor >= 85000 && valor < 100000) {
            setNivel(() => 11)
            console.log("Nivel: " + nivel)
        } else if (valor >= 100000 && valor < 120000) {
            setNivel(() => 12)
            console.log("Nivel: " + nivel)
        } else if (valor >= 120000 && valor < 140000) {
            setNivel(() => 13)
            console.log("Nivel: " + nivel)
        } else if (valor >= 140000 && valor < 165000) {
            setNivel(() => 14)
            console.log("Nivel: " + nivel)
        } else if (valor >= 165000 && valor < 195000) {
            setNivel(() => 15)
            console.log("Nivel: " + nivel)
        } else if (valor >= 195000 && valor < 225000) {
            setNivel(() => 16)
            console.log("Nivel: " + nivel)
        } else if (valor >= 225000 && valor < 265000) {
            setNivel(() => 17)
            console.log("Nivel: " + nivel)
        } else if (valor >= 265000 && valor < 305000) {
            setNivel(() => 18)
            console.log("Nivel: " + nivel)
        } else if (valor >= 305000 && valor < 355000) {
            setNivel(() => 19)
            console.log("Nivel: " + nivel)
        } else if (valor >= 355000) {
            setNivel(() => 20)
            console.log("Nivel: " + nivel)
        }
    }

    function calcExperience(e) {
        e.preventDefault();
        var dom = document.getElementById("inputExperience");
        var calc = dom.value;
        var valor = 10;
        if (isNaN(calc) || calc == "" || calc == null) {
            console.log("+ - - - - 01 - - - - +");
            dom.value = null;
            console.log(`Experience[01]: ${experience}`);
        }
        else {
            if (calc.substr(0, 1) == "+") {
                console.log("+ - - - - 02 - - - - +");
                console.log(`Numero: ${parseInt(calc)}`);
                valor = parseInt(experience) + parseInt(calc.substr(1));
                console.log(`${parseInt(experience)} + ${parseInt(calc.substr(1))} = ${parseInt(experience) + parseInt(calc.substr(1))}`);
                console.log(`Valor: ${valor}, ${typeof (valor)}`);
                setExperience( () => valor);
                calcNivel(valor);
                dom.value = "";
                console.log(`Experience[02]: ${experience}`);
            } else {
                if (calc.substr(0, 1) == "-") {
                    console.log("+ - - - - 03 - - - - +");
                    console.log(`Numero: ${parseInt(calc)}`);
                    valor = parseInt(experience) - parseInt(calc.substr(1));
                    console.log(`${parseInt(experience)} - ${parseInt(calc.substr(1))} = ${parseInt(experience) - parseInt(calc.substr(1))}`);
                    console.log(`Valor: ${valor}, ${typeof (valor)}`);
                    setExperience( () => valor);
                    calcNivel(valor);
                    dom.value = "";
                    console.log(`Experience[03]: ${experience}`);
                } else {
                    console.log("+ - - - - 04 - - - - +");
                    console.log(`Numero: ${parseInt(calc)}`);
                    valor = parseInt(calc);
                    console.log(`Valor: ${valor}, ${typeof (valor)}`);
                    setExperience( () => valor);
                    calcNivel(valor);
                    dom.value = "";
                    console.log(`Experience[04]: ${experience}`);
                }
            }
        }
        console.log(`Experience: ${experience}`)
        console.log("\n")
    }

    useEffect(() => {
        var local = sessionStorage.getItem("jogador");
        var stringLocal = JSON.parse(local)
        setNomeJogador(stringLocal.nomeJogador)
    })

    return (
        <div className={Style.All}>
            <div>
                <input type="text" name="nomePJ" id="" className={Style.InputNome} />
                <p className={Style.TextNome}> NOME DO PERSONAGEM</p>
            </div>
            <div className={Style.Flex}>
                <div className={Style.Box}>
                    <div className={Style.Flex2}>
                        <div>
                            <select id="classe" className={Style.InputClasse}>
                                <option value="none">Classe</option>
                                <option value="Artificer">Artificer</option>
                                <option value="Barbaro">Barbaro</option>
                                <option value="Bardo">Bardo</option>
                                <option value="Bruxo">Bruxo</option>
                                <option value="Clerigo">Clerigo</option>
                                <option value="Druida">Druida</option>
                                <option value="Feiticeiro">Feiticeiro</option>
                                <option value="Guerreiro">Guerreiro</option>
                                <option value="Ladino">Ladino</option>
                                <option value="Mago">Mago</option>
                                <option value="Monge">Monge</option>
                                <option value="Paladino">Paladino</option>
                                <option value="Patrulheiro">Patrulheiro</option>
                            </select>
                            <p className={Style.Text}>CLASSE</p>
                        </div>
                        <div>
                            <input type="text" className={Style.InputNivel} readOnly value={nivel} />
                            <p className={Style.Text}>Nivel</p>
                        </div>
                    </div>
                    <input type="text" className={Style.Input} />
                    <p className={Style.Text}>RA??A</p>
                </div>
                <div className={Style.Box}>
                    <input type="text" className={Style.Input} />
                    <p className={Style.Text}>ANTECEDENTE</p>
                    <select id="Alinhamento" className={Style.InputAlinhamento}>
                        <option value="none">Alinhamento</option>
                        <option value="LB">Leal e Bom</option>
                        <option value="LN">Leal e Neutro</option>
                        <option value="LM">Leal e Mau</option>
                        <option value="NB">Neutro e Bom</option>
                        <option value="NN">Neutro e Neutro</option>
                        <option value="NM">Neutro e Mal</option>
                        <option value="CB">Caotico e Bom</option>
                        <option value="CN">Caotico e Neutro</option>
                        <option value="CM">Caotico e Mau</option>
                    </select>
                    <p className={Style.Text}>TENDENCIA</p>
                </div>
                <div className={Style.Box}>
                    <input type="text" className={Style.Input} readOnly value={nomeJogador} />
                    <p className={Style.Text}>NOME DO JOGADOR</p>
                    <form onSubmit={calcExperience}>
                        <input type="text" id="inputExperience" className={Style.Input} placeholder={experience} />
                        <p className={Style.Text}>PONTOS DE EXPERIENCIA</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Head;