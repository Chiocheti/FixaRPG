import Logo from '../../images/LogoRPG.png'
import { Link } from 'react-router-dom'
import Style from '../../css/navbar/stylesNavbarLogOff.module.css'

function NavbarlogOff() {
    return (
        <div className={Style.All}>
            <img src={Logo} alt="Logo" className={Style.Logo} />
            <p className={Style.Frase}>
                SEU RPG COMEÇA AQUI
            </p>
            <Link className={Style.Button} to="/">
                MAIN
            </Link>
            <Link className={Style.Button} to="/Login">
                LOGIN
            </Link>
            <Link className={Style.Button} to="/Cadastro">
                REGISTER
            </Link>
        </div>
    )
}

export default NavbarlogOff