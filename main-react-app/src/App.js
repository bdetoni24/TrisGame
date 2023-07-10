import React, { useState, useEffect } from 'react';
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
  const [xWin,setXWin] = useState(0)
  const [oWin,setOWin] = useState(0)

  useEffect(() => {
    const savedXWin = parseInt(localStorage.getItem('xWin'), 10)
    const savedOWin = parseInt(localStorage.getItem('oWin'), 10)

    if(savedXWin){
      setXWin(savedXWin)
    }
    if(savedOWin){
      setOWin(savedOWin)
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('xWin',xWin)
    console.log('salvataggio di xWin: '+xWin)
  }, [xWin]);

  useEffect(() => {
    localStorage.setItem('oWin',oWin)
    console.log('salvataggio di oWin: '+oWin)
  }, [oWin]);

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
      <ResetButton />
      <Table newXWin={newXWin} newOWin={newOWin}/>
    </div>
    );
};
