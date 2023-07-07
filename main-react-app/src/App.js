import React, { useState } from 'react';
import './App.css';
import ResetButton from './ResetButton.js'
import Table from './Table.js';
import RecordTable from'./RecordTable.js';
import RematchButton from'./RamatchButton.js';

export default function App(){
  const [rematchVisible, setRematchVisible] = useState(false)
  const [xWin,setXWin] = useState(0)
  const [oWin,setOWin] = useState(0)


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
      <ResetButton/>
      <Table newXWin={newXWin} newOWin={newOWin} rematchButtonVisible={buttonVisible} rematchButtonhide={buttonHide}/>
      <h3 id="labelWinner"></h3>
      {rematchVisible?<RematchButton />:""}
    </div>
    );
};
