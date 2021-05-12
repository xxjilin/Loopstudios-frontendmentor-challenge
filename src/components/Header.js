import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
    const showNav = () => {
        const menuBtn = document.querySelector('.menu-btn')
        const navbar = document.querySelector('nav')

            navbar.classList.toggle('open')
            menuBtn.classList.toggle('rotate')
       
    }
    return (
        <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="loopsudios"/>
            </div>

            <nav>
                <div className="nav-logo"><img src={logo} alt="" /></div>
                <ul>
                    <li><button>About</button></li>
                    <li><button>Careers</button></li>
                    <li><button>Event</button></li>
                    <li><button>Products</button></li>
                    <li><button>Support</button></li>
                </ul>
            </nav>

            <div className="menu-btn" onClick={() => showNav()}>
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
            </div>
        </header>
        </>
    )
}

export default Header
