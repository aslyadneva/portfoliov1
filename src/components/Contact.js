import React from 'react'
import Header from '../ui/Header'
import Form from './Form'
import { FaGithub, FaEnvelope, FaMapPin } from 'react-icons/fa'
import { AiOutlineArrowUp } from "react-icons/ai";
import ResumeButton from '../ui/ResumeButton';

const Contact = ({scrollToTop}) => {
  return (
    <section className="SectionNarrow Contact">
      <Header title="Contact"/>  

      <div className="Contact__content">
        
        <div className="Contact__details">   

          <div className="Contact__detail">
            <FaGithub />
            <p>aslyadneva</p>
          </div>      
          <div className="Contact__detail">
            <FaEnvelope />
            <p>slyadneva.anastasia@gmail.com</p>
          </div>       
          <div className="Contact__detail">
            <FaMapPin />
            <p>Dallas, TX</p>
          </div>   

          <div className="Contact__resume">
            <ResumeButton />    
          </div>
          
        </div>

        <div className="Contact__form">
          <Form />
        </div>     

      </div>
      


      <div style={{textAlign: 'center', marginBottom: '-30px', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <AiOutlineArrowUp style={{ fontSize: '3rem', cursor: 'pointer' }} onClick={scrollToTop}/>
        <p onClick={scrollToTop} style={{ cursor: 'pointer' }}>Back to top</p>
      </div>
    </section>
  )
}

export default Contact
