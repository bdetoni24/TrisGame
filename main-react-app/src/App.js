import React, { useState } from 'react';
import './App.css';
import ResetButton from './ResetButton.js'
import Table from './Table.js';
import RecordTable from'./RecordTable.js';
import RematchButton from'./RamatchButton.js';

export default function App(){
  const [rematchVisible, setRematchVisible] = useState(false)

  function buttonVisible(){
    console.log("attivazione bottone in corso")
    setRematchVisible(true);
  }

  function buttonHide(){
    console.log("bottone nascosto")
    setRematchVisible(false);
  }

  return( 
    <div id="mainDiv">
      <h1>Tris Game</h1>
      <RecordTable />
      <ResetButton/>
      <Table rematchButtonVisible={buttonVisible} rematchButtonhide={buttonHide}/>
      <h3 id="labelWinner"></h3>
      {rematchVisible?<RematchButton />:""}
    </div>
    );
};
