import React from 'react'
import './help.css'
import HelpQuestion from './HelpQuestion'
import data from '../data'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <section className='help'>
      <h1>Frequently Asked Questions</h1>
      {data.map((item) => {
        return <HelpQuestion key={item.id} {...item} />
      })}
      <h2>
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form className='help-form'>
        <input
          type='email'
          className='help-email'
          placeholder='Email Address'
        />
        <button type='submit'>
          <Link to='movies'>GET STARTED</Link>
        </button>
      </form>
    </section>
  )
}

export default Help
