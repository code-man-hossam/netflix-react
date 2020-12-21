import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from './netflix.png'
import smile from './smily.png'

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else setShow(false)
    })
  }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <Link to='/'>
        <img src={logo} alt='' className='nav_logo' />
      </Link>
      <Link to='movies'>
        <img src={smile} alt='' className='nav_avatar' />
      </Link>
    </div>
  )
}

export default Nav
