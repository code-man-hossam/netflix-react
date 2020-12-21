import React, { useState } from 'react'
import './help.css'
import { FaTimes } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'

const HelpQuestion = ({ title, info }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false)

  return (
    <div className='help-col'>
      <div className='help-col-head'>
        <h3>{title}</h3>
        <button onClick={() => setIsAnswerOpen(!isAnswerOpen)}>
          {isAnswerOpen ? <FaTimes /> : <BiPlus />}
        </button>
      </div>
      <p className={isAnswerOpen ? 'show' : ''}>{info}</p>
    </div>
  )
}

export default HelpQuestion
