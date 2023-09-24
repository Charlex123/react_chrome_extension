import React from 'react'
// import { Container } from '../App'
// import { OutreachButton } from './styles/ButtonVariants.styled'
import {HashRouter as Router,} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare, faCheckDouble, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome, faGoogle, faCheck,faCheckCircle)

const Login = () => {

  return (
    <div className='loginmain'>
      <div className="overlay_d"></div>
      <div className="c_content">
            <h1>Welcome To The Outreach</h1>
            <div><h2>Your best mass gmail sender</h2></div>
            
            {/* <div className='signin_btn'>
                <button type='button' id="outreach-btn"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</button>
            </div> */}
            <div>
              <h4>What you benefit by using Outreach</h4>
              <ul>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Sending bulk email campaigns to many recipients at once</li>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Tracking your email campaigns at several time intervals of your preference</li>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Sending test mail campaigns for experimental purposes</li>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Create email campaign drafts and send them later </li>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> Schedule and auto-follow up your email campaigns</li>
                <li> <FontAwesomeIcon icon={faCheckCircle} size='lg' className='fa-check-circ'/> And many more</li>
              </ul>
            </div>
            <div className='signin_btn'>
                <a href={process.env.REACT_APP_REDIRECT_LIVE} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} size='lg' className='google-signin-icon'/> Sign In To Gmail To Continue</a>
            </div>
      </div>
    </div>
  )
}

export default Login