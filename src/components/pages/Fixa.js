import React from 'react';
import { useState } from 'react';
import ModAtrib from '../fixa/ModAtrib.js'
import PercepcaoPassiva from '../fixa/PercepcaoPassiva.js'
import Head from '../fixa/Head.js'

import Style from '../../css/fixa/styles.module.css'
function Main() {

  var [valorPercepcaoPassiva, setPercepcaoPassiva] = useState(() => 10);

  const ValorPercepcaoPassiva = r => {
    setPercepcaoPassiva(r);
  }

  return (
    <>
      <div>
        <div className={Style.head}>
          <Head/>
        </div>
        <div className={Style.flex}>
          <ModAtrib percepcao={ValorPercepcaoPassiva} />
        </div>
        <PercepcaoPassiva valor={valorPercepcaoPassiva} />
      </div>
    </>
  );
}

export default Main;