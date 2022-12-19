import React from 'react';
import { useState } from 'react';
import ModAtrib from '../components/fixa/ModAtrib.js'
import PercepcaoPassiva from '../components/fixa/PercepcaoPassiva.js'
import Style from '../css/main/styles.module.css'

function App() {

  var [valorPercepcaoPassiva, setPercepcaoPassiva] = useState(() => 10);

  const ValorPercepcaoPassiva = r => {
    setPercepcaoPassiva(r);
  }

  return (
    <div>
      <div className={Style.head}>
      </div>
      <div className={Style.flex}>
        <ModAtrib percepcao={ValorPercepcaoPassiva} />
      </div>
      <PercepcaoPassiva valor={valorPercepcaoPassiva} />
    </div>
  );
}

export default App;
