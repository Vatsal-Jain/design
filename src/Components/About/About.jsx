import React from 'react'
import './About.css'
import ME from '../../assets/backg.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About=()=> {
  return (
    <section id='about'>
      <h5>Get to Know More</h5>
       <h2>About Me</h2>
       <div className="container about__container">
         <div className="about__me">
           <div className='about__me-image'>
         <img src={ME} />
         </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>
                Expereince
              </h5>
              <small> 1+ Years Working </small>

            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>
                Clients
              </h5>
              <small> 10+ Working </small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small> 10+ Projects </small>

            </article>


          </div>
          <p>Myself Vatsal Jain I'm Currently Studying Computer Science Engineering From Sangam University Bhilwara.I'm in the final Year of my course, having experience in working in frontend development
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
         </div>
         </div>
    </section>
  )
}

export default About