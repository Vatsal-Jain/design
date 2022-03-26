import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'> 
    <a href='' target='_blank'><BsLinkedin/></a>
    <a href=''   target='_blank'  ><BsGithub/></a>
    <a href=''  target='_blank'     ><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials