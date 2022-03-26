import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact=()=> {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a7tbqs7', 'template_opybgxa', form.current, 'YhQHUXYLane-x3j5_')
   e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vatsaljain000@gmail.com</h5>
            <a href="mailto:vatsaljain000@gmail.com" target='_blank'>
              Send A MEssage
            </a>

          </article>
               
          <article className='contact__option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Vatsal Jain</h5>
            <a href="https://m.me/vatsaljain000" target='_blank'>
              Send A MEssage
            </a>

          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
           
            <a target='_blank'
            href="https://api.whatsapp.com/send?phone=919772803347">
              Send a Message
            </a>

          </article>




        </div>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text"
                name='name'
                placeholder='your full name' required />
                <input type="email"
                name='email'
                placeholder='your email' required />
                <textarea name='message' rows="7" placeholder='your message' required />
                <button type='submit' className='btn btn-primary'>
                  Send Message
                </button>
              </form>

      </div>
    </section>
  )
}

export default Contact