import Style from "../../css/main/stylesMainLogin.module.css"
import Logo from "../../images/LogoRPG.png"

function MainLogin() {
    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
                    <img src={Logo} alt="Logo" className={Style.Logo} />
                    <div className={Style.Form}>
                        <p className={Style.Text}>
                            APELIDO
                        </p>
                        <input type="text" className={Style.Input} />
                        <br />
                        <p className={Style.Text}>
                            SENHA
                        </p>
                        <input type="password" className={Style.Input} />
                        <div className={Style.Flex}>
                            <input type="checkbox" name="" id="" />
                            <p>MANTER-ME CONECTADO</p>
                        </div>
                        <button className={Style.Btt} to="/Login">
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