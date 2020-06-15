import React from 'react'
import Header from '../ui/Header'
import aboutPhoto from '../assets/aboutPhoto.jpeg'
import { BsChevronRight } from 'react-icons/bs'

const skills = ['JavaScript (ES6)', 'HTML + SCSS', 'React.js', 'Redux', 'Gatsby.js', 'Node.js']

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
           After graduating from the University of Ottawa, I've taught myself everything from a simple 'hello world' to a full fledged web app.
          </p>
          
          <p style={{ marginTop: '2rem' }}>
            My focus lies in having a solid foundation of core principles, whilst using modern frameworks to enhance development.
          </p>

          <p style={{ marginTop: '2rem' }}>
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="About__list">   
            {skills.map(skill => (
              <li>
                <p style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem'}}>
                  <BsChevronRight style={{ marginRight: '4px'}}/>
                  {skill}
                </p>
              </li>
            ))}         
          </ul>
        
        </div>
        <div className="About__image">
          <img src={aboutPhoto} alt="Anastasia" style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
        </div>
      </article>
    </section>
  )
}

export default About
