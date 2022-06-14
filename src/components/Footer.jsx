import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import { WhatsApp } from '@material-ui/icons'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className='socialMedia'>
          <a target="_blank" href="https://www.linkedin.com/in/elias-benavides/">
            <LinkedIn />
          </a>
            <a target="_blank" href="https://github.com/eliasbenavides">
              <GitHub />
            </a>
            <a target="_blank" href="https://wa.me/50687905451">
              <WhatsApp />
            </a>
        </div>
    </div>
  )
}

export default Footer

// https://wa.me/50687905451
// https://github.com/eliasbenavides
// https://www.linkedin.com/in/elias-benavides/