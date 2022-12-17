import React, { useState } from 'react';
import Style from '../../css/fixa/stylesPercepcaoPassiva.module.css'

function PercepcaoPassiva({ valor }) {

    return (
        <div className={Style.block_PercepcaoPassiva}>
            <p className={Style.block_PercepcaoPassiva_Value}> {valor} </p>
            <p className={Style.block_PercepcaoPassiva_Text}> PERCEPÇÃO PASSIVA </p>
        </div>
    )
}

export default PercepcaoPassiva;