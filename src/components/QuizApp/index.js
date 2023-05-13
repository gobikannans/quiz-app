import React from 'react'

import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import quiz from "../../assets/quiz.jpg"

import {FaRegCommentDots} from "react-icons/fa"
import {BsSave,BsQuestionCircle,BsClock,BsFiles} from "react-icons/bs"
import {GiCrossedSwords} from "react-icons/gi"
import {AiFillStar,} from "react-icons/ai"
import {AiOutlineFile} from "react-icons/ai"
import {RiErrorWarningLine} from "react-icons/ri"

import { UseAppContext } from '../../context/AppContext'
import "./index.css"

const rules=[
    {
        id:0,
        icon:<BsClock size={25}/>,
        ruleTitle:"10 Mins",
        rulePara:"Keep in mind that its a time-bound quiz"
    },
    {
        id:1,
        icon:<BsQuestionCircle size={25}/>,
        ruleTitle:"5 Question",
        rulePara:"We believe that u will ace it!"
    },
    {
        id:2,
        icon:<BsClock size={25}/>,
        ruleTitle:"50% Passing Criteria",
        rulePara:"All the best! See you on the other side."
    }
]

const QuizApp = () => {
    const {startTimer}=UseAppContext();

     



  return (
    <main className='main-container'>
      <section className='section-container '>
        <div className='banner-container'>
        <h1 className='banner-heading'>The <span className='inline-heading'>Daily</span> MS <span className='inline-heading'>Excel </span>Quiz</h1>
        <img src={quiz} alt="quiz" className='quiz-img'/>
      </div>
      <div className='details-container'>
        <h1 className='heading'>The Daily MS Excel Quiz</h1>
        <div className='details-sec-container'>
            <div>
                <p className='qpoints'><span className='icons'><FaRegCommentDots color='green'/></span>Leave a Comment</p>
                <p className='qpoints'><span className='icons'><BsSave/></span>Save Quiz</p>
                <p className='qpoints'><span className='icons'><GiCrossedSwords/></span>Challenge a Friend</p>
            </div>
            <div className='small-container'>
                 <p className='sec-points'>98+ people enrolled</p>
                 <p className='star-icon'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></p>
                 <p className='sec-points'>3 Rating (5.0)</p>
            </div>
        </div>
        <p className='para'>This Microsoft Excel Profiency Test is designed to evaluate an individual's knowledge and skills i using Microsoft Excel, It covers a wide range of topics, including data..</p>
        <span className='read-more'>Read More</span>
      
      <div>
        <h4 className="bottom-heading">This Quiz Includes</h4>
        <div>
            <p className='bottom-points'><span className='icons'><AiOutlineFile/></span>50% Passing Percentage</p>
            <p className='bottom-points'><span className='icons'><BsQuestionCircle/></span>5 Questions</p>
            <p className='bottom-points'><span className='icons'><BsClock/></span>10 Mins</p>
            <p className='bottom-points'><span className='icons'><BsFiles/></span>1 Attempt Daily</p>
        </div>
      </div>
      </div>
      <div>
        <hr className='hr-line'/>
      </div>
    <div className='popup-container'>
      <Popup
     modal
     trigger={<button type="button" className="trigger-button" >
         Take Quiz
       </button>}
   >
     {close => (
       <div className='rule-container'>
         
           <h1 className='rules-heading'>Quiz Rules</h1>
         <ul className='rule-container-list'>
            {rules.map(({id,icon,ruleTitle,rulePara})=>(
                <li key={id} className='rules-item'>

                <div className='rule-icon'>
                    {icon}
                </div>
                <div>
                    <p className='rules-titles'>{ruleTitle}</p>
                    <p className='rules-para'>{rulePara}</p>
                </div>
               </li>
            ))}
           </ul>  
         <div className='final-rule'>
            <span><RiErrorWarningLine/></span>
            <p className='final-rule-para'>This quiz can be attempted once daily.</p>
         </div>
      <Link to="/quizstart" className='links' >
         <button
           type="button"
           className="quiz-button"
           onClick={startTimer}
         >
           Start
         </button>
      </Link>  
       </div>
     )}
   </Popup>
   </div>
      </section>  

    </main>
  )
}

export default QuizApp