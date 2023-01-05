import { FcUnlock, FcCheckmark, FcEmptyTrash } from "react-icons/fc";

import Style from "../../css/fixa/stylesItemArma.module.css"

function ItemArma() {
    return (
        <div className={Style.All}>
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
            <div>
                <FcUnlock size={25} className={Style.BttLock}/>
                <FcCheckmark size={25} className={Style.BttUpdate}/>
                <FcEmptyTrash size={25} className={Style.BttDelete}/>
            </div>
        </div>
    )
}

export default ItemArma;