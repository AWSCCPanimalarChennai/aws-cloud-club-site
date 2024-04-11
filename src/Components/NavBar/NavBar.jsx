import "./NavBarStyles.css"

import React, { useState } from "react" ;

import { Link } from "react-router-dom" ;

import AWSCloudClubLogo from "../../assets/img/logo.png" ;


function NavBar() {
    const [ click, setClick ] = useState(false) ;
    const handleClick = () => setClick(!click) ;

    return (
        <div className = "navbar">
            <Link to = "/">
                <img className = "logo" src = { AWSCloudClubLogo } alt = "AWSCloudClubLogo" />
            </Link>
        
            <ul className = { click ? "navbar-menu active" : "navbar-menu" }>
                <li>
                    <Link to = "/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = "/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to = "/events" >
                        Events
                    </Link>
                </li>
                {/* <li>
                    <Link to = "/resources" >
                        Resources
                    </Link>
                </li> */}
                <li>
                    <Link to = "/gallery" className = "navbar-menu-last-element" >
                        Gallery
                    </Link>
                </li>
            </ul>

            <div className = "hamburger" onClick = { handleClick } >
                { click ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <defs>
                            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F1F3F3" />
                                <stop offset="100%" stopColor="#7C5AED" />
                            </linearGradient>
                        </defs>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" fill="url(#gradient)"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <defs>
                            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F1F3F3" />
                                <stop offset="100%" stopColor="#7C5AED" />
                            </linearGradient>
                        </defs>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" fill="url(#gradient)"/>
                    </svg>
                ) }
            </div>
        </div>
    ) ;
}


export default NavBar ;
