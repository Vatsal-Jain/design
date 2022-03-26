import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience=()=> {
  return (
    <section id='experience'>
   <h5>What skills i have</h5>
   <h2>My Experience</h2>

   <div className='container exp__container'>
     <div className="exp__frontend">
       <h3>Frontned Development</h3>
       <div className="exp__content">
         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>

         <h4>HTML</h4>
         <small className='text-light'>Experienced</small>
         </div>
 
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Bootstrap</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Css</h4>
         <small className='text-light'>Experienced</small>
         </div>
         </article>
        

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>React</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Shopify</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Javascript</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>
         
        
       </div>
     </div>
      {/* =====Backend ======// */}
     <div className="exp__backend">
       <h3>Backend Development</h3>
       <div className="exp__content">
         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Mysql</h4>
         <small className='text-light'>Experienced</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>Python</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>C++</h4>
         <small className='text-light'>Experienced</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon'/>
         <div>
         <h4>MongoDb</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>

         <article className='exp__details'><BsPatchCheckFill className='exp__details-icon' />
         <div>
         <h4>Java</h4>
         <small className='text-light'>Intermediate</small>
         </div>
         </article>
        
       </div>
     </div>

   </div>

    </section>
  )
}


export default Experience