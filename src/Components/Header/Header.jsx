import React from 'react'
import CTA from './CTA'
import ME from '../../assets/main.png'
import HeaderSocials from './HeaderSocials'
import '../Header/Header.css';


function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello , I'M </h5>
            <h1>Vatsal Jain</h1>
            <h5 className='text-light'>Full Stack developer</h5>
            <CTA />
            <HeaderSocials />
            <div className="mee">
                <img src={ME} />
            </div>
            <a href="#contact" className='scroll_down'>
                Scroll Down
            </a>
            
        </div>
    </header>
  )
}

export default Header