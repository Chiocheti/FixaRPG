import Style from "../../css/main/stylesMain.module.css"
import Logo from "../../images/LogoRPG.png"

import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
                    <p className={Style.Text}> BEM VINDOS <br /> AO  RPG </p>
                    <img src={Logo} alt="Logo" className={Style.Logo} />
                    <div className={Style.Form}>
                        <Link className={Style.Btt} to="/Login">
                            <p> LOGAR </p>
                        </Link>
                        <br />
                        <Link className={Style.Btt} to="/Cadastro">
                            <p> CRIAR CONTA </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main