import React, { useState } from 'react';
import './App.css';
import ResetButton from './ResetButton.js'
import Table from './Table.js';
import RecordTable from'./RecordTable.js';
import RematchButton from'./RamatchButton.js';

export default function App(){
  const [rematchVisible, setRematchVisible] = useState(false)
  let xWins=0;
  let oWins=0;


  function buttonVisible(){
    setRematchVisible(true);
  }

  return( 
    <div id="mainDiv">
      <h1>Tris Game</h1>
      <RecordTable />
      <ResetButton/>
      <Table rematchButtonVisible={buttonVisible}/>
      <h3 id="labelWinner"></h3>
      {{rematchVisible}?<RematchButton />:""}
    </div>
    );
};
