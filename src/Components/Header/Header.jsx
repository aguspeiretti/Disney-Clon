import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {

    const [login , setLogin] = useState(false)

  return (
    <div className='headerContainer'>
        <div className='Logo'>
            <img src="/images/logo.svg" alt="" />
        </div>
        <div className='NavMenu'>
        <a>
            <img src="/images/home-icon.svg" alt="" />
           <Link to={"/"}><span>HOME</span></Link>
        </a>
        <a>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIE</span>
        </a>
        <a>
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
        </a>
        </div>
        
        <div className='Login'>
            {login ? <img src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bd2f.png" alt="" /> 
            : <Link to={"/Login"}> <button className='Login'>LOGIN</button></Link>
            }
            
        </div>
    </div>
  )
}

export default Header