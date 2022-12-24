import Style from "../../css/main/stylesMainCadastro.module.css"

function MainCadastro() {
    return (
        <div className={Style.Back}>
            <div className={Style.All}>
                <div className={Style.Login}>
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
                        <p className={Style.Text}>
                            REPETIR SENHA
                        </p>
                        <input type="password" className={Style.Input} />
                        <button className={Style.Btt} to="/Login">
                            <p> CADASTRAR </p>
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCadastro