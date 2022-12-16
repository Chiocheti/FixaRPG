import React from 'react';
import ModAtrib from './components/fixa/ModAtrib.js'
import Style from './css/main/styles.module.css'

function App() {
  return (
    <div>
      <div className={Style.head}>
      </div>
      <div className={Style.flex}>
        <ModAtrib></ModAtrib>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
