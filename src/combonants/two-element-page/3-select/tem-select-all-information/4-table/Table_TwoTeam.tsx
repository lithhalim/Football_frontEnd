import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style/style.scss"


let Header_Name=["#","TEAM","P","W","D","L","F","A","GD","PTS"]


function Table_TwoTeam({Datause,savePlace}:any) {


    const [DataTable,setDataTable]=useState<any>(false);
    useEffect(()=>{
        axios.get(`https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${Datause.league_key}&APIkey=${process.env.REACT_APP_API}`).then((data)=>{
            setDataTable(data.data.result)
        })
    },[Datause])




  return (
    <div className='table-container-two' >
        <table>
            <tr>
                {Header_Name.map((data,i)=>(<th key={i} >{data}</th>))}
            </tr>
            {
                DataTable!==false?DataTable[savePlace].map(({standing_A,standing_D,standing_F,standing_GD,standing_L,standing_P,standing_PTS,standing_W,standing_place,standing_team}:any,i:any)=>(
                <tr key={i}>
                    <td>{standing_place}</td>
                    <td>{standing_team}</td>
                    <td>{standing_P}</td>
                    <td>{standing_W}</td>
                    <td>{standing_D}</td>
                    <td>{standing_L}</td>
                    <td>{standing_F}</td>
                    <td>{standing_A}</td>
                    <td>{standing_GD}</td>
                    <td>{standing_PTS}</td>
                </tr>    
                )):<></>
            }
        </table>
    </div>
  )
}

export default Table_TwoTeam
