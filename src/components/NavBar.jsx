import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import "../styles/NavBar.css"
import ReorderIcon from '@material-ui/icons/Reorder'

const NavBar = () => {

  const [expandNavbar, setExpandNavbar] = useState(false)

  const handleClick = () =>{
    setExpandNavbar((prev) => !prev)
  }

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location] )

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {handleClick()}}>
              <ReorderIcon/>
            </button>
        </div>
        <div className="links" >
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/experience"}>Experience</Link>
        </div>
    </div>
  )
}

export default NavBar