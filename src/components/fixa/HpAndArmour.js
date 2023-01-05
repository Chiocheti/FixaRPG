
import React from 'react';
import Style from "../../css/fixa/stylesHpAndArmour.module.css"

function HpAndArmour() {

    function countDead(valor) {
        console.log(valor)
        console.log(`Dead${valor}`)
        var dom = document.getElementById(`Dead${valor}`)
        console.log(dom)
        if (dom.checked) {
            for (var i = 1; i <= valor; i++) {
                var checkbox = document.getElementById(`Dead${i}`)
                checkbox.checked = true
            }
        }
    }

    function countLife(valor) {
        var dom = document.getElementById(`Live${valor}`)
        if (dom.checked) {
            for (var i = 1; i <= valor; i++) {
                var checkbox = document.getElementById(`Live${i}`)
                checkbox.checked = true
            }
        }
    }

    return (
        <div className={Style.All}>
            <div className={Style.Flex}>
                <div className={Style.ClassArmour}>
                    <input type="text" className={Style.InputClassArmour} />
                    <p className={Style.TextClassArmour}> C.A</p>
                </div>
                <div className={Style.Iniciativa}>
                    <input type="text" className={Style.InputIniciativa} />
                    <p className={Style.TextIniciativa}> INICIATIVA</p>
                </div>
                <div className={Style.Deslocamento}>
                    <input type="text" className={Style.InputDeslocamento} />
                    <p className={Style.TextDeslocamento}> DESLOC.</p>
                </div>
            </div>
            <div className={Style.PV}>
                <div className={Style.Flex}>
                    <p className={Style.TextPVTotal}>PV TOTAIS</p>
                    <input type="text" name="" id="" className={Style.InputPVTotal} />
                </div>
                <input type="text" name="" id="" className={Style.InputPVAtual} />
                <p className={Style.TextPVAtual}>PONTOS DE VIDA ATUAIS</p>
            </div>
            <div className={Style.PV}>
                <input type="text" name="" id="" className={Style.InputPVTemporario} />
                <p className={Style.TextPVTemporario}>PONTOS DE VIDA TEMPORARIOS</p>
            </div>
            <div className={Style.Flex}>
                <div className={Style.Dados}>
                    <div className={Style.Flex}>
                        <p className={Style.TextTotalDados}>Total</p>
                        <input type="text" className={Style.InputTotalDados} />
                    </div>
                    <input type="text" className={Style.InputDadoDeVida} />
                    <p className={Style.TextDadoDeVida}>DADOS DE VIDA</p>
                </div>
                <div className={Style.TesteMorte}>
                    <div className={Style.Flex}>
                        <p className={Style.TextSucesso}>SUCESSO</p>
                        <input type="checkbox" name="" id="Live1" className={Style.CheckboxDeath} onClick={() => countLife("1")} />
                        <input type="checkbox" name="" id="Live2" className={Style.CheckboxDeath} onClick={() => countLife("2")} />
                        <input type="checkbox" name="" id="Live3" className={Style.CheckboxDeath} onClick={() => countLife("3")} />
                    </div>
                    <div className={Style.Flex}>
                        <p className={Style.TextFracasso}>FRACASSO</p>
                        <input type="checkbox" name="" id="Dead1" className={Style.CheckboxDeath} onClick={() => countDead("1")} />
                        <input type="checkbox" name="" id="Dead2" className={Style.CheckboxDeath} onClick={() => countDead("2")} />
                        <input type="checkbox" name="" id="Dead3" className={Style.CheckboxDeath} onClick={() => countDead("3")} />
                    </div>
                    <p className={Style.TextTesteMorte}>TESTES CONTRA MORTE</p>
                </div>
            </div>
        </div>
    )
}

export default HpAndArmour;