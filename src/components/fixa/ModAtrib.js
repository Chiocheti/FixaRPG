import React from 'react';
import { useState } from 'react';
import Proficiencia from './Proficiencia.js'
import Style from '../../css/fixa/stylesModAtrib.module.css'

function ModAtrib() {
    ///// Teste
    var [modForca, setModForca] = useState(() => -5);
    var [modDestreza, setModDestreza] = useState(() => -5);
    var [modConstituicao, setModConstituicao] = useState(() => -5);
    var [modInteligencia, setModInteligencia] = useState(() => -5);
    var [modSabedoria, setModSabedoria] = useState(() => -5);
    var [modCarisma, setModCarisma] = useState(() => -5);

    var modificadores = {
        Forca : modForca,
        Destreza : modDestreza,
        Constituicao : modConstituicao,
        Inteligencia : modInteligencia,
        Sabedoria : modSabedoria,
        Carisma : modCarisma,
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
            setModForca(() => Math.round(mod));
        }
        if (name == "destreza") {
            setModDestreza(() => Math.round(mod));
        }
        if (name == "constituicao") {
            setModConstituicao(() => Math.round(mod));
        }
        if (name == "inteligencia") {
            setModInteligencia(() => Math.round(mod));
        }
        if (name == "sabedoria") {
            setModSabedoria(() => Math.round(mod));
        }
        if (name == "carisma") {
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
                        onChange={() => CalculaMod("forca")}
                    />
                    <p className={Style.block_Mod} id='mod_forca'> -5 </p>
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
                        onChange={() => CalculaMod("destreza")}
                    />
                    <p className={Style.block_Mod} id='mod_destreza'> -5 </p>
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
                        onChange={() => CalculaMod("constituicao")}
                    />
                    <p className={Style.block_Mod} id='mod_constituicao'> -5 </p>
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
                        onChange={() => CalculaMod("inteligencia")}
                    />
                    <p className={Style.block_Mod} id='mod_inteligencia'> -5 </p>
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
                        onChange={() => CalculaMod("sabedoria")}
                    />
                    <p className={Style.block_Mod} id='mod_sabedoria'> -5 </p>
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
                        onChange={() => CalculaMod("carisma")}
                    />
                    <p className={Style.block_Mod} id='mod_carisma'> -5 </p>
                </div>
            </div>
            <Proficiencia props={modificadores}></Proficiencia>
        </div>
    )
}

export default ModAtrib;