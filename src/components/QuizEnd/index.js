import React from 'react'
import { Link } from 'react-router-dom'
import celeb from "../../assets/celebration.png"
import { UseAppContext } from '../../context/AppContext'
import {MdStars} from "react-icons/md"

import "./index.css"


const QuizEnd = () => {
    const {mark}=UseAppContext()
  return (
    <div className='quiz-end'>
    <div className='quizendbg-container'>
        <img src={celeb} alt="img" className=''/>
      <div className='quizend-container'> 
        <div className='points-container'>
            <h1 className='points' ><MdStars color='orange' size={25} style={{marginRight:"5px"}}/> {mark *30}</h1> 
        </div>
        <h1 className='end-heading'>Karma Points earned!</h1>

      <div>
        <p className='karma-heading'>What are Karma points?</p>
        <p className='karma-para'>Karma points are awarded for various actions like attempting
            quizzes and watching videos, allowing ou to movie up the leaderboards and 
            unlock the new features
        </p>
        </div>  
   </div>
    </div>
    <Link to="/results" className="link-button" >
    <button
    type="button"
    className="result-button"
  >
    Check Results
  </button>
</Link>
    </div>
  )
}

export default QuizEnd