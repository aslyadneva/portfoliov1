import React from 'react'
import Header from '../ui/Header'
import aboutPhoto from '../assets/aboutPhoto.jpeg'
import { BsChevronRight } from 'react-icons/bs'

const skills = ['JavaScript', 'SCSS', 'React', 'Redux', 'Node.js']

const About = () => {
  return (
    <section 
      className="SectionNarrow About" 
      style={{ maxWidth: '750px' }} 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <Header title="About" /> 
      <article className="About__content">
        <div className="About__text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quos consequuntur maxime quia fuga, eaque est ex, perferendis quam a voluptatem.       
           </p>
          
          <p style={{ marginTop: '2rem' }}>
            Quos consequuntur maxime quia fuga, eaque est ex, perferendis quam a voluptatem, aliquid.
          </p>

          <ul className="About__list">   
            {skills.map(skill => (
              <li><p style={{ display: 'flex', alignItems: 'center' }}><BsChevronRight style={{ marginRight: '4px'}}/>{skill}</p></li>
            ))}         
          </ul>
        
        </div>
        <div className="About__image">
          <img src={aboutPhoto} alt="Anastasia" style={{height: '100%', filter: 'saturation(50%)'}}/>
        </div>
      </article>
    </section>
  )
}

export default About
