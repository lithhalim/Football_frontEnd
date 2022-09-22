import React, { useState } from 'react';
import "./style/style.scss"


let Header_Name=["Time","First Team","Scoure","Secand Tream"]

function Summery_Two({Datause}:any) {
    let DataUse=[...Datause.goalscorers,...Datause.cards    ]
    DataUse.sort((a,b)=>(a.time-b.time))
    
  return (
    <div className='summery-container' >
                <table style={{marginTop:"10px 30px"}} > 
                    <tr>
                        {Header_Name.map((data,i)=>(<th key={i} >{data}</th>))}
                    </tr>
                    {
                        DataUse.map(({away_assist,away_scorer,home_assist,home_scorer,score,time,card,away_fault,home_fault}:any,i:any)=>(
                        <tr key={i}>
                            <td>{time}</td>
                            <td>
                                <div className='gool-score-container'>
                                    
                                    {away_scorer!==""&&score?<img src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931__340.png" alt="" />:<></>}
                                    {away_fault!==""&&card?<p  className='card-saver' style={{backgroundColor:"yellow"}}></p>:<></>}
                                    <div className='text'>
                                        <p>{away_scorer}</p>
                                        <p>{away_assist}</p>
                                        <p>{away_fault}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{score}</td>
                            <td>                                
                                <div className='gool-score-container'>
                                  {home_scorer!==""&&score?<img src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931__340.png" alt="" />:<></>}
                                  {home_fault!==""&&card?<p className='card-saver' style={{backgroundColor:"yellow"}}></p>:<></>}
                                    <div className='text'>
                                        <p>{home_scorer}</p>
                                        <p>{home_assist}</p>
                                        <p>{home_fault}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>    
                        ))
                    }
                </table>
    </div>
  )
}

export default Summery_Two
