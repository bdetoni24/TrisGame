import React, { useState } from 'react';
import './App.css';
import ResetButton from './ResetButton.js'
import Table from './Table.js';
import RecordTable from'./RecordTable.js';
import RematchButton from'./RamatchButton.js';

export default function App(){
  const [state, setState] = useState(false)

  function buttonVisible(){
    setState(true);
  }

  return( 
    <div id="mainDiv">
      <h1>Tris Game</h1>
      <RecordTable/>
      <ResetButton/>
      <Table activateReset={state}/>
      <h3 id="labelWinner"></h3>
      {state?<RematchButton />:""}
    </div>
    );
};
