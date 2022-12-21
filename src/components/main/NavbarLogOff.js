import React from "react"
import Style from "../../css/main/stylesNavbarLogOff.module.css"
import Logo from "../../public/LogoRPG.png"

function NavbarLogOff() {
    return (
        <div className={Style.All}>
            <div className={Style.Box}>
            <img src={Logo} alt="Logo" className={Style.Logo} />
            </div>
        </div>
    )
}

export default NavbarLogOff