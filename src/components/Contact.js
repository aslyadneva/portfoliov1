import React from 'react'
import Header from '../ui/Header'
import Form from './Form'
import { FaGithub, FaEnvelope, FaMapPin, FaFilePdf } from 'react-icons/fa'

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
          
        </div>

        <div className="Contact__form">
          <Form />
        </div>     

      </div>
      


      <div onClick={scrollToTop}>Scroll to top</div>
    </section>
  )
}

export default Contact
