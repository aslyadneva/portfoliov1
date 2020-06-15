import React from 'react'; 
import ocean from '../assets/ocean1.mp4'; 

import Lead from '../ui/Lead'; 
import Navbar from '../ui/Navbar'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const navLinks = ['Projects', 'Contact', 'About']

const navSocials = [<FaGithub site="github" url="https://github.com/aslyadneva" />, <FaLinkedin url="https://www.linkedin.com/in/anastasia-slyadneva" site="linkedin"/>]
 
const Home = ({toggleSideNav}) => { 
  return (
    <section id="home" className="Home">
      <aside className="Home__media">
        <video autoPlay loop muted>
          <source src={ocean} type="video/mp4"/>
        </video>
      </aside>
      <main className="Home__main">
        <div className="Home__navbar" data-aos="fade-left" data-aos-duration="1000">
          <Navbar type='primary' items={navLinks} toggleSideNav={toggleSideNav}/>
        </div>
       
        <div className="Home__content">

          <header 
            className="Home__header" 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-once="true"
          >
            Anastasia <br/> front-end developer
          </header>

          <div 
            className="Home__text" 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-once="true"
          > 
            <Lead title="Hello"/>
            <p>
              Hi there! I'm Anastasia, a front-end developer based in Dallas, TX. <br/>
              I love to learn new technologies and bring beautiful designs to life on the web.
            </p>
          </div>

        </div>
        <div className="Home__socials">
          <Navbar type='socials' items={navSocials}/>
        </div>
      </main>
    </section>
  )
}

export default Home; 
