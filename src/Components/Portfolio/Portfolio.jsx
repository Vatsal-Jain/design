import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/portfolio5.png'

const data = [
    {
    id:1,
    title:'Amazon_clone',
    image:IMG1,
    github:"https://github.com/Vatsal-Jain/amazon-clone-cpVersion" ,
    demo:'https://clone-d94f7.web.app/'

        
    },
     
    {
        id:2,
        title:'Whatsapp Web clone',
        image:IMG2,
        github:"https://github.com/Vatsal-Jain/realtimechat" ,
        demo:'https://whatsapp-clone-e7eee.web.app/'
    
            
        },

        {
            id:3,
            title:'Vaani AI desktop',
            image:IMG3,
            github:"https://github.com/Vatsal-Jain/Vaani" ,
            demo:'https://github.com/Vatsal-Jain/Vaani'
        
                
            },

            {
                id:4,
                title:'Uber Next Clone',
                image:IMG4,
                github:"https://uber-clone-next-js.web.app/" ,
                demo:'https://uber-clone-next-js.web.app/'
            
                    
                }

]

const Portfolio =()=> {
  return (
   <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>
       <div className="container portfolio__container">

       {
           data.map(({id,image,title,github,demo})=>{
               return(
                <article key={id} className='portfolio__items'>
                <div className="portfolio__items-image"> 
                  <img src={image} alt={title} /> 
                     </div>
            
                    <h3>
                       {title}
                    </h3>
                    <div className='portfolio__items-cta'>
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live demo </a>
            
                    </div>
                 </article>
               )
           })
       }

   
    
   



       </div>
   </section>
  )
}

export default Portfolio