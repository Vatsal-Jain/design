import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './Footeer.css'

const Footeer=()=> {
  return (
<footer>
    <a href="#" className='footer__logo'>
        Vatsal Jain
    </a>
    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
        <a href="https://facebook.com/vatsaljain000"><FaFacebook /></a>
        <a href="https://www.instagram.com/__vatsaljain/"><FiInstagram /></a>
        <a href="https://twitter.com/vatsaljain000"><IoLogoTwitter /></a>
    </div>
    <div className="footer__copyright">
        <small>&copy; Vatsal Jain. All rights Reserved </small>
    </div>
</footer>
  )
}

export default Footeer