import React from 'react'
import './MailList.css'
function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">
            Save time, save money!
        </h1>
        <span className="mailDescription">Sign up and we'll send the best deals to you</span>
        <div className="mailContainer">
            <input type="text" placeholder='john@gmail.com' />
            <button className='mailBtn'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList