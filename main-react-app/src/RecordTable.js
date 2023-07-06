import { useState } from 'react';
import './App.css'

export default function RecordTable(){
    const [xWins,setXWins] = useState(0)
    const [oWins,setOWins] = useState(0)

    return(
      <table id="recordTable">
        <thead>
          <tr>
            <td>x</td>
            <td>o</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
    );
  }