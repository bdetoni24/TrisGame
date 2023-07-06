import React, { useState } from 'react';
import './App.css';
import App from './App.js'

export default function Table(nRow,nColumn){
    const [teamName,setTeamName] = useState('o')
    let team=false;
    let showButton=false;
    let nClick=0;
    let isEndGame=false;
    let clickedCells = [
      {id:1, clicked:false, team: 0},
      {id:2, clicked:false, team: 0},
      {id:3, clicked:false, team: 0},
      {id:4, clicked:false, team: 0},
      {id:5, clicked:false, team: 0},
      {id:6, clicked:false, team: 0},
      {id:7, clicked:false, team: 0},
      {id:8, clicked:false, team: 0},
      {id:9, clicked:false, team: 0},
    ];
  
    function tableReset(){
      let i=0;
      for(i=0;i<8;i++){
        clickedCells[i].team=0;
        document.getElementById(i).innerHTML = '<td id="'+i+'" onClick={()=>tableClicked('+i+')}>'+i+'</td>';
        
      }
      nClick=0;
    }
  
    function tableClicked(nCella){
      if(!clickedCells[nCella-1].clicked && !isEndGame){
        nClick++;
        clickedCells[nCella-1].clicked=true;
        team =! team;
        console.log("È stata cliccata la casella "+nCella);
        let char;
        if(team){
          char="o";
          clickedCells[nCella-1].team=1;
          checkWinner(1);
        }
        else{
          char="x";
          clickedCells[nCella-1].team=2;
          checkWinner(2);
        }
  
        let cell = document.getElementById(nCella)
        cell.innerHTML = char
      }
    }
  
    function checkWinner(team){
      let ret = false;
      if(nClick!=9){
        {/*Combinazioni verticali*/}
        ret = Object.is(clickedCells[0].team, team) && Object.is(clickedCells[3].team, team) && Object.is(clickedCells[6].team, team);
        ret = ret || (Object.is(clickedCells[1].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[7].team, team));
        ret = ret || (Object.is(clickedCells[2].team, team) && Object.is(clickedCells[5].team, team) && Object.is(clickedCells[8].team, team));
  
        {/*Combinazioni orizzontali*/}
        ret = ret || (Object.is(clickedCells[0].team, team) && Object.is(clickedCells[1].team, team) && Object.is(clickedCells[2].team, team));
        ret = ret || (Object.is(clickedCells[3].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[5].team, team));
        ret = ret || (Object.is(clickedCells[6].team, team) && Object.is(clickedCells[7].team, team) && Object.is(clickedCells[8].team, team));
  
        {/*Combinazioni diagonali*/}
        ret = ret || (Object.is(clickedCells[0].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[8].team, team));
        ret = ret || (Object.is(clickedCells[2].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[6].team, team));
  
        if (ret){
          isEndGame=true;
          document.getElementById("labelWinner").innerHTML='<h3 id="labelWinner">Ha vinto il team '+team+'</h3>';
        }
      }
      else{
        isEndGame=true;
        document.getElementById("labelWinner").innerHTML='<h3 id="labelWinner">Pareggio</h3>';
      }
    }

    return(
      <div>
        <table id="mainTable">
          <thead></thead>
          <tbody>
            <tr>
              <td id="1" style={{color: isEndGame?'red,':'blue,'}} onClick={()=>tableClicked(1)}></td>
              <td id="2" onClick={()=>tableClicked(2)}></td>
              <td id="3" onClick={()=>tableClicked(3)}></td>
            </tr>
            <tr>
              <td id="4" onClick={()=>tableClicked(4)}></td>
              <td id="5" onClick={()=>tableClicked(5)}></td>
              <td id="6" onClick={()=>tableClicked(6)}></td>
            </tr>
            <tr>
              <td id="7" onClick={()=>tableClicked(7)}></td>
              <td id="8" onClick={()=>tableClicked(8)}></td>
              <td id="9" onClick={()=>tableClicked(9)}></td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  }