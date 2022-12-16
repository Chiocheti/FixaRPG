import React from "react";
import { useState  , useEffect} from "react";
import Style from "../../css/fixa/stylesProficiencia.module.css"

function Proficiencia({ props }) {

    var [resistForca, setResistForca] = useState(() => props.Forca);
    var [resistDestreza, setResistDestreza] = useState(() => props.Destreza);
    var [resistConstituicao, setResistConstituicao] = useState(() => props.Constituicao);
    var [resistInteligencia, setResistInteligencia] = useState(() => props.Inteligencia);
    var [resistSabedoria, setResistSabedoria] = useState(() => props.Sabedoria);
    var [resistCarisma, setResistCarisma] = useState(() => props.Carisma);
    
    var [proficiencia, setProficiencia] = useState(() => 2);

    console.log(props)
    console.log(resistForca)

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
        console.log("ProficienciaValue: " + proficienciaValue)
        console.log("Proficiencia: " + proficiencia)
    }

    function SomaProficiencia(nome) {
        var checkbox = document.getElementById(`checkbox_${nome}`)
        if(checkbox.checked) {
            if(nome == "forca"){
                setResistForca(() => props.Forca + proficiencia)
            }
            if(nome == "destreza"){
                setResistDestreza(() => props.Destreza + proficiencia)
            }
            if(nome == "constituicao"){
                setResistConstituicao(() => props.Constituicao + proficiencia)
            }
            if(nome == "inteligencia"){
                setResistInteligencia(() => props.Inteligencia + proficiencia)
            }
            if(nome == "sabedoria"){
                setResistSabedoria(() => props.Sabedoria + proficiencia)
            }
            if(nome == "carisma"){
                setResistCarisma(() => props.Carisma + proficiencia)
            }
        }
        if(!checkbox.checked) {
            if(nome == "forca"){
                setResistForca(() => props.Forca)
            }
            if(nome == "destreza"){
                setResistDestreza(() => props.Destreza)
            }
            if(nome == "constituicao"){
                setResistConstituicao(() => props.Constituicao)
            }
            if(nome == "inteligencia"){
                setResistInteligencia(() => props.Inteligencia)
            }
            if(nome == "sabedoria"){
                setResistSabedoria(() => props.Sabedoria)
            }
            if(nome == "carisma"){
                setResistCarisma(() => props.Carisma)
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
        </div>
    )
}

export default Proficiencia;