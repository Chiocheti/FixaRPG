import Logo from '../../images/LogoRPG.png'
import { Link } from 'react-router-dom'
import Style from '../../css/navbar/stylesNavbarLogOn.module.css'

function NavbarlogOn() {
    return (
        <div className={Style.All}> 
            <img src={Logo} alt="Logo" className={Style.Logo} />
            <p className={Style.Frase}>
                SEU RPG COMEÇA AQUI
            </p>
            <Link className={Style.Button} to="/logued/Fixa">
                Fixa
            </Link>
            <Link className={Style.Button} to="/logued/UserPage">
                Your Channel
            </Link>
        </div>
    )
}

export default NavbarlogOn