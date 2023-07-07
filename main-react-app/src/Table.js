import React, { useState } from 'react';
import './App.css';
import App from './App.js'
import SimpleTable from './SimpleTable';

export default function Table(props){
    const [teamName,setTeamName] = useState('o')
    const [isEndGame,setIsEndGame] = useState(false);
    let team=false;
    let activateReset= props.activateReset;
    let showButton=false;
    let nClick=0;
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
        clickedCells[i].clicked=false;
        console.log(document.getElementById((i+1).toString()).innerHTML)
        document.getElementById((i+1).toString()).innerHTML = '';
        
      }
      setIsEndGame(false);
      document.getElementById("labelWinner").innerHTML=''
      nClick=0;
      props.rematchButtonHide();
    }
  
    function tableClicked(nCella){
      if(!clickedCells[nCella-1].clicked && !isEndGame){
        nClick++;
        clickedCells[nCella-1].clicked=true;
        console.log("Hai cliccato la cella "+nCella);
        team =! team;
        let char;
        let cell = document.getElementById(nCella)
        if(team){
          char="o";
          clickedCells[nCella-1].team=1;
          cell.style.color = "green"
          checkWinner(1,"green");
        }
        else{
          char="x";
          clickedCells[nCella-1].team=2;
          cell.style.color = "red"
          checkWinner(2,"red");
        }
  
        cell.innerHTML = char
      }
    }
  
    function checkWinner(team,color){
      let ret = false;
      if(nClick<=9){
        {/*Combinazioni verticali*/}
        if(Object.is(clickedCells[0].team, team) && Object.is(clickedCells[3].team, team) && Object.is(clickedCells[6].team, team)){
          ret=true;
          document.getElementById("1").style.backgroundColor=color;
          document.getElementById("4").style.backgroundColor=color;
          document.getElementById("7").style.backgroundColor=color;
          document.getElementById("1").style.color="white";
          document.getElementById("4").style.color="white";
          document.getElementById("7").style.color="white";
        }
        if(Object.is(clickedCells[1].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[7].team, team)){
          ret=true;
          document.getElementById("2").style.backgroundColor=color;
          document.getElementById("5").style.backgroundColor=color;
          document.getElementById("8").style.backgroundColor=color;
          document.getElementById("2").style.color="white";
          document.getElementById("5").style.color="white";
          document.getElementById("8").style.color="white";
        }
        if(Object.is(clickedCells[2].team, team) && Object.is(clickedCells[5].team, team) && Object.is(clickedCells[8].team, team)){
          ret=true;
          document.getElementById("3").style.backgroundColor=color;
          document.getElementById("6").style.backgroundColor=color;
          document.getElementById("9").style.backgroundColor=color;
          document.getElementById("3").style.color="white";
          document.getElementById("6").style.color="white";
          document.getElementById("9").style.color="white";
        }
  
        {/*Combinazioni orizzontali*/}
        if(Object.is(clickedCells[0].team, team) && Object.is(clickedCells[1].team, team) && Object.is(clickedCells[2].team, team)){
          ret=true;
          document.getElementById("1").style.backgroundColor=color;
          document.getElementById("2").style.backgroundColor=color;
          document.getElementById("3").style.backgroundColor=color;
          document.getElementById("1").style.color="white";
          document.getElementById("2").style.color="white";
          document.getElementById("3").style.color="white";
        }
        if(Object.is(clickedCells[3].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[5].team, team)){
          ret=true;
          document.getElementById("4").style.backgroundColor=color;
          document.getElementById("5").style.backgroundColor=color;
          document.getElementById("6").style.backgroundColor=color
          document.getElementById("4").style.color="white";
          document.getElementById("5").style.color="white";
          document.getElementById("6").style.color="white";
        }
        if(Object.is(clickedCells[6].team, team) && Object.is(clickedCells[7].team, team) && Object.is(clickedCells[8].team, team)){
          ret=true;
          document.getElementById("7").style.backgroundColor=color
          document.getElementById("8").style.backgroundColor=color
          document.getElementById("9").style.backgroundColor=color
          document.getElementById("7").style.color="white";
          document.getElementById("8").style.color="white";
          document.getElementById("9").style.color="white";
        }
  
        {/*Combinazioni diagonali*/}
        if(Object.is(clickedCells[0].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[8].team, team)){
          ret=true;
          document.getElementById("1").style.backgroundColor=color
          document.getElementById("5").style.backgroundColor=color
          document.getElementById("9").style.backgroundColor=color
          document.getElementById("1").style.color="white";
          document.getElementById("5").style.color="white";
          document.getElementById("9").style.color="white";
        }
        if(Object.is(clickedCells[2].team, team) && Object.is(clickedCells[4].team, team) && Object.is(clickedCells[6].team, team)){
          ret=true;
          document.getElementById("3").style.backgroundColor=color
          document.getElementById("5").style.backgroundColor=color
          document.getElementById("7").style.backgroundColor=color
          document.getElementById("3").style.color="white";
          document.getElementById("5").style.color="white";
          document.getElementById("7").style.color="white";
        }

        {/*Caso di pareggio */}
        if((nClick===9)&&!ret){
          setIsEndGame(true)
          document.getElementById("labelWinner").innerHTML='Pareggio';
          props.rematchButtonVisible();
        }
        
        {/*Caso di vittoria */}
        if (ret){
          setIsEndGame(true);
          document.getElementById("labelWinner").innerHTML='Ha vinto il team  ' + (team?"o":"x");
          props.rematchButtonVisible();
          if(team){
            props.newOWin()
          }
          else{
            props.newXWin()
          }
        }
      }
    }

    function mouseOverCell(nCell){
      if(!clickedCells[nCell-1].clicked&&!isEndGame){
        document.getElementById(nCell.toString()).style.backgroundColor = '#CACACA';
      }
    }

    function mouseOutCell(nCell){
      if(document.getElementById(nCell.toString()).style.backgroundColor != "green"){
        document.getElementById(nCell.toString()).style.backgroundColor = 'white';
      }
    }

    return(
      <div>
        <SimpleTable tableClicked={tableClicked}mouseOverCell={mouseOverCell}mouseOutCell={mouseOutCell}/>
        
      </div>
    );
  }