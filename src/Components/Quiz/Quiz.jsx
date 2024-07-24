import React from 'react'
import './quiz.css'
import {useState} from 'react';
import { data } from '../../data';

export default function Quiz() {
  const [index,setIndex]=useState(0);
  const[question,setQuestion]=useState(data[index])
  const [isLastPage,setIsLastPage]=useState(false)
  const [score,setScore]=useState(0)
  const [lock,setLock]=useState(false)
  //const [ansStatus,setAnsStatus]=useState(false)
  const [ansEvent,setAnsEvent]=useState(0)

  function updateQuestionIndex()
  {
    setLock(false)
    //setAnsStatus(false)
    if(ansEvent.target.classList.contains('incorrect'))
    {
      ansEvent.target.classList.remove('incorrect')
    }

    if(ansEvent.target.classList.contains('correct'))
      {
        ansEvent.target.classList.remove('correct')
      }

    if(index<data.length-1)
    {
      setIndex(index+1)
      setQuestion(data[index+1])
    }
    
    else
    {
      setIsLastPage(true)
    }
  }

  function checkAnswer(e,ans)
  {
    if(lock===false)
    {
          if(ans===question.answer)
          {
            e.target.classList.add('correct');
            setScore(score+1)
            setLock(true)
            setAnsEvent(e)
            //setAnsStatus(true)
          }
          else
          {
            e.target.classList.add('incorrect'); 
            setAnsEvent(e)
            //setAnsStatus(true)
          }
    }
  }
  
  if(isLastPage === true)
  {
    return(
      <>
      <h2>Congratulations, Quiz finished!</h2>
      <label><h3>Score: {score}</h3></label>
      </>
    )
  }

  return (
   <div className='quiz'>
       <h1>Kod Quiz</h1>
        <h3>{question.question}</h3>
       <ul>
        <li onClick={(e)=>checkAnswer(e,"1")}>{question.option1}</li>
        <li onClick={(e)=>checkAnswer(e,"2")}>{question.option2}</li>
        <li onClick={(e)=>checkAnswer(e,"3")}>{question.option3}</li>
        <li onClick={(e)=>checkAnswer(e,"4")}>{question.option4}</li>
       </ul>
       
    
       <button onClick={updateQuestionIndex}>NEXT</button>
       <div>Question: {index+1} of {data.length}</div>
    </div>
  )
}
