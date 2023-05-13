import React from 'react'
import { Link } from 'react-router-dom'
import QuizEnd from '../QuizEnd'
import {UseAppContext} from '../../context/AppContext'

import"./index.css"

const questions=[
  {
    id:1,
    ques:'What is the function used to lookup a value in a table and return a corresponding value from the same row?',
    op1:"MATCH",
    op2:"INDEX",
    op3:"HLOOKUP",
    op4:"VLOOKUP",
  },
  {
    id:2,
    ques:'Which formula is not equivalent to all of the others?',
    op1:"=SUM(A3,A6)",
    op2:"=A3+A4+A5+A6",
    op3:"=SUM(A3:A6)",
    op4:"=SUM(A3,A4,A5,A6)",
  },
  {
    id:3,
    ques:'A cell contains the value 7.877 and you want it to display as 7.9. How can you accomplish that?',
    op1:"Click the Decrease Decimal button once",
    op2:"In the cells group on the Home tab, click format > Format Cells.Then click the Alignment tab and select Right Indent",
    op3:"Click the Decrease Decimal button twice",
    op4:"Use the Round() function",
  },
  {
    id:4,
    ques:'Intersection of a column and row is called ______.',
    op1:"WorkSheet",
    op2:"Cell",
    op3:"Ribbon",
    op4:"Round"
  },
  {
    id:5,
    ques:'The Now() Function returns the current date and time as 43740.665218.Which part of this value indicates the time?',
    op1:"665218",
    op2:"6652",
    op3:"43740",
    op4:"43740.66522",
  },
]


function QuizStart() {
  const {question,nextQuestion,val,onRadioChange,submit,time,intervalId}=UseAppContext()
  const {id,ques,op1,op2,op3,op4}=questions[question]




  return (
    <>
    {
      time.min!==1?
        <div className='quizes-container'>
          <div  className='quizbg-container'>
            <div className='question-timer'>
              <div className='question-no-container'>
                <span className='q-no'>0{id}/05</span>
              </div>
              <div className='timer-container'>
                <span className='q-no'>{time.min}:{time.sec}</span>
              </div>  
            </div>
            <div className='quiz-container'>
              <p className='question'>{ques}</p>
                <div className='choice-container'>
                 <div  className='label-container'>
                  <label  className='label'>
                    <span className='letter'>A</span>
                    <span>{op1}</span>
                    <input value={op1} checked={val===op1} onChange={onRadioChange} type="radio"/>
                  </label>
                  </div>  
                  <div className='label-container'>
                  <label  className='label'>
                    <span className='letter'> B</span>
                    <span>{op2}</span>
                    <input type="radio" value={op2} checked={val===op2} onChange={onRadioChange}/>
                  </label>
                  </div>  

                  <div className='label-container'>

                  <label className='label'>
                    <span className='letter'>C</span>
                    <span>{op3}</span>
                    <input type="radio" value={op3} checked={val===op3} onChange={onRadioChange}  />
                  </label>
                  </div>  

                  <div  className='label-container'>

                  <label className='label'>
                    <span className='letter'>D</span>
                    <span>{op4}</span>
                    <input type="radio" value={op4} checked={val===op4} onChange={onRadioChange}/>
                  </label>
                  </div>  

                  </div>
              </div>
              </div> 
          {question===questions.length-1?    
              
              <Link to="/quizend" className="link-button" onClick={submit}>
              <button
              type="button"
              className="next-button"
            >
              Submit
            </button>
            </Link>
         :
         <button
           type="button"
           className="next-button"
           onClick={nextQuestion}
         >
           Next
         </button>
          }
        </div>:
    <>
    {clearInterval(intervalId)}
<QuizEnd/>
    </>
    }</>
        )

}

export default QuizStart