import React, { useState } from 'react';
import './App.css'

export default function RematchButton(props){
  const [visible,setVisible] = useState(false)

  function onMouseOver(){
    document.getElementById("rematchButton").style.color="#CACACA";
  }

  function onMouseOut(){
      console.log('mouse out')
      document.getElementById("rematchButton").style.color="white";
  }


  return(
    <div>
      <h3 id="rematchButton" onClick={props.rematchGame} onMouseOver={onMouseOver} onMouseOut={onMouseOut}><u>Play Again</u></h3>
    </div>
  );
}