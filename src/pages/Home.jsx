import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import '../styles/Home.css'


const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Elías</h2>
        <div className='prompt'>
          <p>A <b className='b'>Frontend Developer</b> with passion for learing and creating</p>
          <a target="_blank" href="https://www.linkedin.com/in/elias-benavides/">
            <LinkedIn />
          </a>
          <a href="mailto:elias02d2@gmail.com">
            <Email />
          </a>
          <a target="_blank" href="https://github.com/eliasbenavides">
              <GitHub />
          </a>


        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, TypeScript, NPM, Bootstrap, MaterialUI, TailwindCss, StyledComponents, AJAX, NextJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, WebServer, Express, Testing, SQL, Sequelize, MongoDB, Authentication
              PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Other Skills</h2>
            <span>
              Git, SCRUM, Deployment, Good Practices,
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home