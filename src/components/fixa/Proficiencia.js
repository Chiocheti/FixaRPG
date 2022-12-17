import React from "react";
import { useState, useEffect } from "react";
import Style from "../../css/fixa/stylesProficiencia.module.css"

function Proficiencia({ modificadores, handleResult }) {

    var [resistForca, setResistForca] = useState(() => modificadores.Forca);
    var [resistDestreza, setResistDestreza] = useState(() => modificadores.Destreza);
    var [resistConstituicao, setResistConstituicao] = useState(() => modificadores.Constituicao);
    var [resistInteligencia, setResistInteligencia] = useState(() => modificadores.Inteligencia);
    var [resistSabedoria, setResistSabedoria] = useState(() => modificadores.Sabedoria);
    var [resistCarisma, setResistCarisma] = useState(() => modificadores.Carisma);

    var [periciaAcrobacia, setPericiaAcrobacia] = useState(() => modificadores.Destreza);
    var [periciaArcanismo, setPericiaArcanismo] = useState(() => modificadores.Inteligencia);
    var [periciaAtletismo, setPericiaAtletismo] = useState(() => modificadores.Forca);
    var [periciaAtuacao, setPericiaAtuacao] = useState(() => modificadores.Carisma);
    var [periciaBlefar, setPericiaBlefar] = useState(() => modificadores.Carisma);
    var [periciaFurtividade, setPericiaFurtividade] = useState(() => modificadores.Destreza);
    var [periciaHistoria, setPericiaHistoria] = useState(() => modificadores.Inteligencia);
    var [periciaIntimidacao, setPericiaIntimidacao] = useState(() => modificadores.Carisma);
    var [periciaIntuicao, setPericiaIntuicao] = useState(() => modificadores.Sabedoria);
    var [periciaInvestigacao, setPericiaInvestigacao] = useState(() => modificadores.Inteligencia);
    var [periciaLidarComAnimais, setPericiaLidarComAnimais] = useState(() => modificadores.Sabedoria);
    var [periciaMedicina, setPericiaMedicina] = useState(() => modificadores.Sabedoria);
    var [periciaNatureza, setPericiaNatureza] = useState(() => modificadores.Inteligencia);
    var [periciaPercepcao, setPericiaPercepcao] = useState(() => modificadores.Sabedoria);
    var [periciaPersuasao, setPericiaPersuasao] = useState(() => modificadores.Carisma);
    var [periciaPrestidigitacao, setPericiaPrestidigitacao] = useState(() => modificadores.Destreza);
    var [periciaReligiao, setPericiaReligiao] = useState(() => modificadores.Inteligencia);
    var [periciaSobrevivencia, setPericiaSobrevivencia] = useState(() => modificadores.Sabedoria);

    var [proficiencia, setProficiencia] = useState(() => 2);

    function CalcProficiencia() {
        var dom = document.getElementById("proficiencia");
        var proficienciaValue = dom.value
        if (proficienciaValue < 2) {
            proficienciaValue = 2;
        }
        if (proficienciaValue > 6) {
            proficienciaValue = 6
        }
        proficienciaValue = Math.round(proficienciaValue);
        dom.value = proficienciaValue;
        setProficiencia(() => proficienciaValue);
        handleResult(periciaPercepcao);
    }

    function SomaProficiencia(nome) {
        var checkbox = document.getElementById(`checkbox_${nome}`)
        if (checkbox.checked) {
            if (nome == "forca") {
                setResistForca(() => modificadores.Forca + proficiencia)
            }
            if (nome == "destreza") {
                setResistDestreza(() => modificadores.Destreza + proficiencia)
            }
            if (nome == "constituicao") {
                setResistConstituicao(() => modificadores.Constituicao + proficiencia)
            }
            if (nome == "inteligencia") {
                setResistInteligencia(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "sabedoria") {
                setResistSabedoria(() => modificadores.Sabedoria + proficiencia)
            }
            if (nome == "carisma") {
                setResistCarisma(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Acrobacia") {
                setPericiaAcrobacia(() => modificadores.Destreza + proficiencia)
            }
            if (nome == "Arcanismo") {
                setPericiaArcanismo(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "Atletismo") {
                setPericiaAtletismo(() => modificadores.Forca + proficiencia)
            }
            if (nome == "Atuacao") {
                setPericiaAtuacao(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Blefar") {
                setPericiaBlefar(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Furtividade") {
                setPericiaFurtividade(() => modificadores.Destreza + proficiencia)
            }
            if (nome == "Historia") {
                setPericiaHistoria(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "Intimidacao") {
                setPericiaIntimidacao(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Intuicao") {
                setPericiaIntuicao(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Investigacao") {
                setPericiaInvestigacao(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "LidarComAnimais") {
                setPericiaLidarComAnimais(() => modificadores.Sabedoria + proficiencia)
            }
            if (nome == "Medicina") {
                setPericiaMedicina(() => modificadores.Sabedoria + proficiencia)
            }
            if (nome == "Natureza") {
                setPericiaNatureza(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "Percepcao") {
                setPericiaPercepcao(() => modificadores.Sabedoria + proficiencia)
                handleResult(periciaPercepcao);
            }
            if (nome == "Persuasao") {
                setPericiaPersuasao(() => modificadores.Carisma + proficiencia)
            }
            if (nome == "Prestidigitacao") {
                setPericiaPrestidigitacao(() => modificadores.Prestidigitacao + proficiencia)
            }
            if (nome == "Religiao") {
                setPericiaReligiao(() => modificadores.Inteligencia + proficiencia)
            }
            if (nome == "Sobrevivencia") {
                setPericiaSobrevivencia(() => modificadores.Sabedoria + proficiencia)
            }
        }
        if (!checkbox.checked) {
            if (nome == "forca") {
                setResistForca(() => modificadores.Forca)
            }
            if (nome == "destreza") {
                setResistDestreza(() => modificadores.Destreza)
            }
            if (nome == "constituicao") {
                setResistConstituicao(() => modificadores.Constituicao)
            }
            if (nome == "inteligencia") {
                setResistInteligencia(() => modificadores.Inteligencia)
            }
            if (nome == "sabedoria") {
                setResistSabedoria(() => modificadores.Sabedoria)
            }
            if (nome == "carisma") {
                setResistCarisma(() => modificadores.Carisma)
            }
            if (nome == "Acrobacia") {
                setPericiaAcrobacia(() => modificadores.Destreza)
            }
            if (nome == "Arcanismo") {
                setPericiaArcanismo(() => modificadores.Inteligencia)
            }
            if (nome == "Atletismo") {
                setPericiaAtletismo(() => modificadores.Forca)
            }
            if (nome == "Atuacao") {
                setPericiaAtuacao(() => modificadores.Carisma)
            }
            if (nome == "Blefar") {
                setPericiaBlefar(() => modificadores.Carisma)
            }
            if (nome == "Furtividade") {
                setPericiaFurtividade(() => modificadores.Destreza)
            }
            if (nome == "Historia") {
                setPericiaHistoria(() => modificadores.Inteligencia)
            }
            if (nome == "Intimidacao") {
                setPericiaIntimidacao(() => modificadores.Carisma)
            }
            if (nome == "Intuicao") {
                setPericiaIntuicao(() => modificadores.Carisma)
            }
            if (nome == "Investigacao") {
                setPericiaInvestigacao(() => modificadores.Inteligencia)
            }
            if (nome == "LidarComAnimais") {
                setPericiaLidarComAnimais(() => modificadores.Sabedoria)
            }
            if (nome == "Medicina") {
                setPericiaMedicina(() => modificadores.Sabedoria)
            }
            if (nome == "Natureza") {
                setPericiaNatureza(() => modificadores.Inteligencia)
            }
            if (nome == "Percepcao") {
                setPericiaPercepcao(() => modificadores.Sabedoria)
                handleResult(periciaPercepcao);
            }
            if (nome == "Persuasao") {
                setPericiaPersuasao(() => modificadores.Carisma)
            }
            if (nome == "Prestidigitacao") {
                setPericiaPrestidigitacao(() => modificadores.Destreza)
            }
            if (nome == "Religiao") {
                setPericiaReligiao(() => modificadores.Inteligencia)
            }
            if (nome == "Sobrevivencia") {
                setPericiaSobrevivencia(() => modificadores.Sabedoria)
            }
        }
    }

    useEffect(() => {
        SomaProficiencia("forca")
        SomaProficiencia("destreza")
        SomaProficiencia("constituicao")
        SomaProficiencia("inteligencia")
        SomaProficiencia("sabedoria")
        SomaProficiencia("carisma")

        SomaProficiencia('Acrobacia')
        SomaProficiencia('Arcanismo')
        SomaProficiencia('Atletismo')
        SomaProficiencia('Atuacao')
        SomaProficiencia('Blefar')
        SomaProficiencia('Furtividade')
        SomaProficiencia('Historia')
        SomaProficiencia('Intimidacao')
        SomaProficiencia('Intuicao')
        SomaProficiencia('Investigacao')
        SomaProficiencia('LidarComAnimais')
        SomaProficiencia('Medicina')
        SomaProficiencia('Natureza')
        SomaProficiencia('Percepcao')
        SomaProficiencia('Persuasao')
        SomaProficiencia('Prestidigitacao')
        SomaProficiencia('Religiao')
        SomaProficiencia('Sobrevivencia')
    });

    return (
        <div>
            <div className={Style.block}>
                <div className={Style.block_Inspiracao}>
                    <input
                        type="checkbox"
                        name="inspiracao"
                        id="inspiracao"
                        className={Style.block_Input_Inspiracao}
                    />
                    <p className={Style.block_Text_Inspiracao}> INSPIRAÇÃO </p>
                </div>
                <div className={Style.block_Proficiencia}>
                    <input
                        type="number"
                        name="proficiencia"
                        id="proficiencia"
                        className={Style.block_Input_Proficiencia}
                        onChange={() => CalcProficiencia()} />
                    <p className={Style.block_Text_Proficiencia}> BÔNUS DE PROFICIENCIA </p>
                </div>
            </div>
            <div className={Style.block_TestResist}>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="forca"
                        id="checkbox_forca"
                        onClick={() => SomaProficiencia("forca")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_forca"> {resistForca} </p>
                    <p className={Style.block_TestResist_Text}> FORÇA </p>
                </div>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="destreza"
                        id="checkbox_destreza"
                        onChange={() => SomaProficiencia("destreza")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_destreza"> {resistDestreza} </p>
                    <p className={Style.block_TestResist_Text}> DESTREZA </p>
                </div>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="constituicao"
                        id="checkbox_constituicao"
                        onChange={() => SomaProficiencia("constituicao")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_constituicao"> {resistConstituicao} </p>
                    <p className={Style.block_TestResist_Text}> CONSITUIÇÃO </p>
                </div>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="inteligencia"
                        id="checkbox_inteligencia"
                        onChange={() => SomaProficiencia("inteligencia")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_inteligencia"> {resistInteligencia} </p>
                    <p className={Style.block_TestResist_Text}> INTELIGENCIA </p>
                </div>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="sabedoria"
                        id="checkbox_sabedoria"
                        onChange={() => SomaProficiencia("sabedoria")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_sabedoria"> {resistSabedoria} </p>
                    <p className={Style.block_TestResist_Text}> SABEDORIA </p>
                </div>
                <div className={Style.block_TestResist_Atributo}>
                    <input
                        className={Style.block_TestResist_Atributo_Input}
                        type="checkbox"
                        name="carisma"
                        id="checkbox_carisma"
                        onChange={() => SomaProficiencia("carisma")
                        } />
                    <p className={Style.block_TestResist_Value} id="valor_carisma"> {resistCarisma} </p>
                    <p className={Style.block_TestResist_Text}> CARISMA </p>
                </div>
                <p className={Style.Titulo}> TESTES DE RESISTENCIA </p>
            </div>
            <div className={Style.block_Pericia}>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="acrobacia"
                        id="checkbox_Acrobacia"
                        onChange={() => SomaProficiencia("Acrobacia")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Acrobacia"> {periciaAcrobacia} </p>
                    <p className={Style.block_Pericia_Text}> Acrobacia </p>
                    <p className={Style.block_Pericia_Text_Frente}> (DES) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="arcanismo"
                        id="checkbox_Arcanismo"
                        onChange={() => SomaProficiencia("Arcanismo")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Arcanismo"> {periciaArcanismo} </p>
                    <p className={Style.block_Pericia_Text}> Arcanismo </p>
                    <p className={Style.block_Pericia_Text_Frente}> (INT) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Atletismo"
                        id="checkbox_Atletismo"
                        onChange={() => SomaProficiencia("Atletismo")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Atletismo"> {periciaAtletismo} </p>
                    <p className={Style.block_Pericia_Text}> Atletismo </p>
                    <p className={Style.block_Pericia_Text_Frente}> (FOR) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Atuacao"
                        id="checkbox_Atuacao"
                        onChange={() => SomaProficiencia("Atuacao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Atuacao"> {periciaAtuacao} </p>
                    <p className={Style.block_Pericia_Text}> Atuação </p>
                    <p className={Style.block_Pericia_Text_Frente}> (CAR) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Blefar"
                        id="checkbox_Blefar"
                        onChange={() => SomaProficiencia("Blefar")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Blefar"> {periciaBlefar} </p>
                    <p className={Style.block_Pericia_Text}> Blefar </p>
                    <p className={Style.block_Pericia_Text_Frente}> (CAR) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Furtividade"
                        id="checkbox_Furtividade"
                        onChange={() => SomaProficiencia("Furtividade")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Furtividade"> {periciaFurtividade} </p>
                    <p className={Style.block_Pericia_Text}> Furtividade </p>
                    <p className={Style.block_Pericia_Text_Frente}> (DES) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Historia"
                        id="checkbox_Historia"
                        onChange={() => SomaProficiencia("Historia")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Historia"> {periciaHistoria} </p>
                    <p className={Style.block_Pericia_Text}> Historia </p>
                    <p className={Style.block_Pericia_Text_Frente}> (INT) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Intimidacao"
                        id="checkbox_Intimidacao"
                        onChange={() => SomaProficiencia("Intimidacao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Intimidacao"> {periciaIntimidacao} </p>
                    <p className={Style.block_Pericia_Text}> Intimidação </p>
                    <p className={Style.block_Pericia_Text_Frente}> (CAR) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Intuicao"
                        id="checkbox_Intuicao"
                        onChange={() => SomaProficiencia("Intuicao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Intuicao"> {periciaIntuicao} </p>
                    <p className={Style.block_Pericia_Text}> Intuição </p>
                    <p className={Style.block_Pericia_Text_Frente}> (SAB) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Investigacao"
                        id="checkbox_Investigacao"
                        onChange={() => SomaProficiencia("Investigacao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Investigacao"> {periciaInvestigacao} </p>
                    <p className={Style.block_Pericia_Text}> Investigação </p>
                    <p className={Style.block_Pericia_Text_Frente}> (INT) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="LidarComAnimais"
                        id="checkbox_LidarComAnimais"
                        onChange={() => SomaProficiencia("LidarComAnimais")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_LidarComAnimais"> {periciaLidarComAnimais} </p>
                    <p className={Style.block_Pericia_Text}> Lidar com Animais </p>
                    <p className={Style.block_Pericia_Text_Frente}> (SAB) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Medicina"
                        id="checkbox_Medicina"
                        onChange={() => SomaProficiencia("Medicina")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Medicina"> {periciaMedicina} </p>
                    <p className={Style.block_Pericia_Text}> Medicina </p>
                    <p className={Style.block_Pericia_Text_Frente}> (SAB) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Natureza"
                        id="checkbox_Natureza"
                        onChange={() => SomaProficiencia("Natureza")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Natureza"> {periciaNatureza} </p>
                    <p className={Style.block_Pericia_Text}> Natureza </p>
                    <p className={Style.block_Pericia_Text_Frente}> (INT) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Percepcao"
                        id="checkbox_Percepcao"
                        onClick={() =>
                            SomaProficiencia("Percepcao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Percepcao"> {periciaPercepcao} </p>
                    <p className={Style.block_Pericia_Text}> Percepção </p>
                    <p className={Style.block_Pericia_Text_Frente}> (SAB) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Persuasao"
                        id="checkbox_Persuasao"
                        onChange={() => SomaProficiencia("Persuasao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Persuasao"> {periciaPersuasao} </p>
                    <p className={Style.block_Pericia_Text}> Persuasão </p>
                    <p className={Style.block_Pericia_Text_Frente}> (CAR) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Prestidigitacao"
                        id="checkbox_Prestidigitacao"
                        onChange={() => SomaProficiencia("Prestidigitacao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Prestidigitacao"> {periciaPrestidigitacao} </p>
                    <p className={Style.block_Pericia_Text}> Prestidigitação </p>
                    <p className={Style.block_Pericia_Text_Frente}> (DES) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Religiao"
                        id="checkbox_Religiao"
                        onChange={() => SomaProficiencia("Religiao")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Religiao"> {periciaReligiao} </p>
                    <p className={Style.block_Pericia_Text}> Religião </p>
                    <p className={Style.block_Pericia_Text_Frente}> (INT) </p>
                </div>
                <div className={Style.block_Pericia_Atributo}>
                    <input
                        className={Style.block_Pericia_Atributo_Input}
                        type="checkbox"
                        name="Sobrevivencia"
                        id="checkbox_Sobrevivencia"
                        onChange={() => SomaProficiencia("Sobrevivencia")
                        } />
                    <p className={Style.block_Pericia_Value} id="valor_Sobrevivencia"> {periciaSobrevivencia} </p>
                    <p className={Style.block_Pericia_Text}> Sobrevivencia </p>
                    <p className={Style.block_Pericia_Text_Frente}> (SAB) </p>
                </div>
                <p className={Style.Titulo_Pericia}> PERICIAS </p>
            </div>
        </div>
    )
}

export default Proficiencia;