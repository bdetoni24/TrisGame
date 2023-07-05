import './App.css';

export default function App() {
  var arrCelle = 1;

  return (
    <div className="App">
      <h1>Tris Game</h1>
      <Table/>
    </div>
  );
}


function clickCell(nCella){
  console.log("È stata cliccata la cella "+nCella+" "+arrCelle);
  
}

function Table(){
  return (
    <table>
    <thead>
    </thead>
    <tbody>
      <tr>
        <td id='1' onClick={() => clickCell("1")}>Cella 1</td>
        <td onClick={() => clickCell("2")}>Cella 2</td>
        <td onClick={() => clickCell("3")}>Cella 3</td>
      </tr>
      <tr>
        <td onClick={() => clickCell("4")}>Cella 4</td>
        <td onClick={() => clickCell("5")}>Cella 5</td>
        <td onClick={() => clickCell("6")}>Cella 6</td>
      </tr>
      <tr>
        <td onClick={() => clickCell("7")}>Cella 7</td>
        <td onClick={() => clickCell("8")}>Cella 8</td>
        <td onClick={() => clickCell("9")}>Cella 9</td>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
  );
}
