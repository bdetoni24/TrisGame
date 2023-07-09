import React, { useState } from 'react';
import './App.css';
import ResetButton from './ResetButton.js'
import Table from './Table.js';
import RecordTable from'./RecordTable.js';

{/*Mancanze:
  - salvare lo stato del game durante un refresh
  - sistemare dei bug fisivi dopo il rematch (come la non scomparsa del pulsante)
  - implementare il pulsante reset correttamente
  - sciogliere il componente "Table" in SimpleTable con i rispettivi metodi
  - commentare e pulire il codici con più funzioni

*/}

export default function App(){
  const [rematchVisible, setRematchVisible] = useState(false)
  const [xWin,setXWin] = useState(0)
  const [oWin,setOWin] = useState(0)
  const [needReset,setNeedReset] = useState(false)

  function newReset(){
    setNeedReset(true)
  }


  function buttonVisible(){
    console.log("attivazione bottone in corso")
    setRematchVisible(true);
  }

  function buttonHide(){
    console.log("bottone nascosto")
    setRematchVisible(false);
  }

  function newXWin(){
    setXWin(xWin+1)
  }

  function newOWin(){
    setOWin(oWin+1)
  }

  return( 
    <div id="mainDiv">
      <h1>Tris Game</h1>
      <RecordTable xWins={xWin} oWins={oWin}/>
      <ResetButton newReset={newReset}/>
      <Table rematchVisible={rematchVisible} needReset={needReset} newXWin={newXWin} newOWin={newOWin} rematchButtonVisible={buttonVisible} rematchButtonhide={buttonHide}/>
    </div>
    );
};
