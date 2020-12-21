import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <h1>Unlimited movies, TV shows and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className='landing-form'>
        <input
          type='email'
          className='landing-email'
          placeholder='Email Address'
        />
        <button type='submit'>
          <Link to='movies'>GET STARTED</Link>
        </button>
      </form>
    </section>
  )
}

export default Landing
