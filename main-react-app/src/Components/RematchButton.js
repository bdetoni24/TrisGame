import React, { useState } from 'react';
import '../App.css'

export default function RematchButton(props){

  //
  function onMouseOver(){
    document.getElementById("rematchButton1").style.color="#CACACA";
  }

  function onMouseOut(){
      document.getElementById("rematchButton1").style.color="white";
  }

  return(
    <div>
      <h3 id="rematchButton1" onClick={props.rematchGame} onMouseOver={onMouseOver} onMouseOut={onMouseOut}><u>Play Again</u></h3>
    </div>
  );
}