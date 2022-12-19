import React from 'react';
import { useState } from 'react';
import Proficiencia from './Proficiencia.js'
import Style from '../../css/fixa/stylesModAtrib.module.css'

function ModAtrib({ percepcao }) {
    var [Forca, setForca] = useState(() => 0);
    var [Destreza, setDestreza] = useState(() => 0);
    var [Constituicao, setConstituicao] = useState(() => 0);
    var [Inteligencia, setInteligencia] = useState(() => 0);
    var [Sabedoria, setSabedoria] = useState(() => 0);
    var [Carisma, setCarisma] = useState(() => 0);
    
    var [modForca, setModForca] = useState(() => -5);
    var [modDestreza, setModDestreza] = useState(() => -5);
    var [modConstituicao, setModConstituicao] = useState(() => -5);
    var [modInteligencia, setModInteligencia] = useState(() => -5);
    var [modSabedoria, setModSabedoria] = useState(() => -5);
    var [modCarisma, setModCarisma] = useState(() => -5);

    var [PercepcaoPassiva, setPercepcaoPassiva] = useState(() => 0);

    var modificadores = {
        Forca: modForca,
        Destreza: modDestreza,
        Constituicao: modConstituicao,
        Inteligencia: modInteligencia,
        Sabedoria: modSabedoria,
        Carisma: modCarisma,
    }

    const updatePercepcaoPassiva = r => {
        setPercepcaoPassiva(() => 10 + r);
        percepcao(PercepcaoPassiva);
        console.log("ModAtrib - R: " + r)
    }

    function CalculaMod(name) {
        var comp_valor = document.getElementById(name);
        var valor = comp_valor.value

        if (isNaN(comp_valor.value)) {
            valor = 0
        }
        if (comp_valor.value > 30) {
            valor = 30
        }
        if (comp_valor.value < 0) {
            valor = 0
        }
        if (comp_valor.value == "" || comp_valor.value == null) {
            valor = 0
        }

        valor = Math.round(valor)
        comp_valor.value = valor
        var comp_mod = document.getElementById(`mod_${name}`);
        var mod = (valor - 10.5) / 2
        comp_mod.innerHTML = Math.round(mod)

        if (name == "forca") {
            setForca(() => valor)
            setModForca(() => Math.round(mod));
        }
        if (name == "destreza") {
            setDestreza(() => valor)
            setModDestreza(() => Math.round(mod));
        }
        if (name == "constituicao") {
            setConstituicao(() => valor)
            setModConstituicao(() => Math.round(mod));
        }
        if (name == "inteligencia") {
            setInteligencia(() => valor)
            setModInteligencia(() => Math.round(mod));
        }
        if (name == "sabedoria") {
            setSabedoria(() => valor)
            setModSabedoria(() => Math.round(mod));
            percepcao(PercepcaoPassiva);
        }
        if (name == "carisma") {
            setCarisma(() => valor)
            setModCarisma(() => Math.round(mod));
        }
    }

    return (
        <div className={Style.all}>
            <div className={Style.modAtrib}>
                <div className={Style.block}>
                    <p className={Style.block_Text}> FORÇA </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        name="forca"
                        id="forca"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("forca")}
                    />
                    <p className={Style.block_Mod} id='mod_forca'> {modForca} </p>
                </div>
                <div className={Style.block}>
                    <p className={Style.block_Text}> DESTREZA </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        id="destreza"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("destreza")}
                    />
                    <p className={Style.block_Mod} id='mod_destreza'> {modDestreza} </p>
                </div>
                <div className={Style.block}>
                    <p className={Style.block_Text}> CONSTITUIÇÃO </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        id="constituicao"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("constituicao")}
                    />
                    <p className={Style.block_Mod} id='mod_constituicao'> {modConstituicao} </p>
                </div>
                <div className={Style.block}>
                    <p className={Style.block_Text}> INTELIGENCIA </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        id="inteligencia"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("inteligencia")}
                    />
                    <p className={Style.block_Mod} id='mod_inteligencia'> {modInteligencia} </p>
                </div>
                <div className={Style.block}>
                    <p className={Style.block_Text}> SABEDORIA </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        id="sabedoria"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("sabedoria")}
                    />
                    <p className={Style.block_Mod} id='mod_sabedoria'> {modSabedoria} </p>
                </div>
                <div className={Style.block}>
                    <p className={Style.block_Text}> CARISMA </p>
                    <input
                        type="number"
                        min="0"
                        max="30"
                        placeholder='0'
                        id="carisma"
                        className={Style.block_Input}
                        onClick={() => CalculaMod("carisma")}
                    />
                    <p className={Style.block_Mod} id='mod_carisma'> {modCarisma} </p>
                </div>
            </div>
            <Proficiencia modificadores={modificadores} handleResult={updatePercepcaoPassiva}></Proficiencia>
        </div>
    )
}

export default ModAtrib;