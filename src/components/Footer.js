import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <h5>Questions? Call 000-800-040-1843</h5>
      <div className='footer-cols'>
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Netflix Originals</li>
        </ul>
        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <select id='country'>
        <option value='English'>English</option>
        <option value='Arabic'>Arabic</option>
      </select>
      <h5 className='netflix'>Netflix</h5>
    </section>
  )
}

export default Footer
