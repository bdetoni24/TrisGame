import React, { useState } from 'react';
import './App.css';
import Table from './Table.js';
import RecordTable from'./RecordTable.js';
import RematchButton from'./RamatchButton.js';

export default function App(){

  return( 
    <div id="mainDiv">
      <h1>Tris Game</h1>
      <Table/>
      <h3 id="labelWinner"></h3>
      <RematchButton/>
    </div>
    );
};
