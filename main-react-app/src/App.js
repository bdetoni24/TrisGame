import './App.css';

function Table(nRow,nColumn){
  const team=false;
  const clickedCells = [
    {id:1, clicked:false, team: "n"},
    {id:2, clicked:false, team: "n"},
    {id:3, clicked:false, team: "n"},
    {id:4, clicked:false, team: "n"},
    {id:5, clicked:false, team: "n"},
    {id:6, clicked:false, team: "n"},
    {id:7, clicked:false, team: "n"},
    {id:8, clicked:false, team: "n"},
    {id:9, clicked:false, team: "n"},
  ];


  function tableClicked(nCella){
    if(!clickedCells[nCella-1].clicked){
      clickedCells[nCella-1].clicked=true;
      team =! team;
      console.log("È stata cliccata la casella "+nCella);
      
      let char;
      if(team){
        char="o";
      }
      else{
        char="x";
      }

      document.getElementById(nCella).innerHTML= "<td nameClass=\""+char+"\">"+char+"</td>"

    }
  }

  return(
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td id="1" onClick={()=>tableClicked(1)}>1</td>
            <td id="2" onClick={()=>tableClicked(2)}>2</td>
            <td id="3" onClick={()=>tableClicked(3)}>3</td>
          </tr>
          <tr>
            <td id="4" onClick={()=>tableClicked(4)}>4</td>
            <td id="5" onClick={()=>tableClicked(5)}>5</td>
            <td id="6" onClick={()=>tableClicked(6)}>6</td>
          </tr>
          <tr>
            <td id="7" onClick={()=>tableClicked(7)}>7</td>
            <td id="8" onClick={()=>tableClicked(8)}>8</td>
            <td id="9" onClick={()=>tableClicked(9)}>9</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}



export default function App(){



  return( 
    <div>
      <h1>Tris Game</h1>
      <Table/>
    </div>
    );
};
