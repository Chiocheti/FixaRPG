import Style from "../../css/fixa/stylesArma.module.css"
import CompArmas from "./CompArmas"

import { FcPlus, FcHighPriority } from "react-icons/fc";

function Armas() {
    return (
        <div className={Style.All}>
            <div className={Style.Overflow}>
                <div className={Style.Flex}>
                    <p className={Style.TextNome}>NOME</p>
                    <p className={Style.TextBonus}>BONUS</p>
                    <p className={Style.TextDano}>DANO</p>
                    <p className={Style.TextTipo}>TIPO</p>
                </div>
                <div>
                    <div>
                        <input type="text" className={Style.InputNome} />
                        <input type="text" className={Style.InputBonus} />
                        <input type="text" className={Style.InputDano} />
                        <select id="classe" className={Style.InputTipo}>
                            <option value="none">Tipo</option>
                            <option value="Conc">Conc</option>
                            <option value="Cort">Cort</option>
                            <option value="Perf">Perf</option>
                        </select>
                    </div>
                    <input type="text" className={Style.InputDescricao} />
                    <FcPlus size={25} className={Style.BttAdd} />
                    <FcHighPriority size={25} className={Style.BttClear} />
                </div>
                <CompArmas />
            </div>
        </div>
    )
}

export default Armas