import Style from "../css/main/stylesLogin.module.css.module.css"
import Logo from "../images/LogoRPG.png"

function Main() {
    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
                    <p className={Style.Text}> BEM VINDOS <br /> AO  RPG </p>
                    <img src={Logo} alt="Logo" className={Style.Logo} />
                    <div className={Style.Form}>
                        <div className={Style.Btt}>
                            <p> LOGAR aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                        </div>
                        <br />
                        <div className={Style.Btt}>
                            <p> CRIAR CONTA </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;