import React from 'react'
import { useNavigate } from "react-router-dom";

import { UseAppContext } from '../../context/AppContext'
import "./index.css"


const ResultPage = () => {
    const {mark,time}=UseAppContext()
    const navigate = useNavigate();

    const onQuizState=()=>{
        navigate("/")
        navigate(0)
    
    }
  return (
    <div className='resultbg'>
        <h1 className='result-heading'>The Daily MS Excel Quiz</h1>
        <div className='result-container'>
                <p className='scored-text'>You Scored</p>
                <h1 className='percentage'>{mark *20}%</h1>
        </div>
        <div className='score-time-container'>
            <div className='score-container'>
                <p className="score-time-text">Your Score</p>
                <h1 className='percentage'>{mark}/5</h1>
            </div>
            <div className='score-container'>
                 <p className="score-time-text">Time Taken</p>
                <h1 className='percentage'>{time.min}:{time.sec}</h1>
            </div>
        </div>
        <h1 className='score-time-text'>Want to start Again</h1>
        <button type="button" className="play-button" onClick={onQuizState} >
         Go to Home Page
       </button>
    </div>
  )
}

export default ResultPage