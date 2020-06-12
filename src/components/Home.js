import React from 'react'; 
import ocean from '../assets/ocean1.mp4'; 

import Lead from '../ui/Lead'; 
import Navbar from '../ui/Navbar';

const navLinks = ['Projects', 'Contact', 'About']

const navSocials = [<i className="github fab fa-github fa-lg"></i>, <i className="linkedin fab fa-linkedin-in fa-lg"></i>]
 
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

          <header className="Home__header" data-aos="fade-right" data-aos-duration="1000">
            Anastasia <br/> front-end developer
          </header>

          <div className="Home__text" data-aos="fade-up" data-aos-duration="1000">
            <Lead title="Introduce"/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
              Praesentium impedit unde dolorum cum. <br/>
              Pariatur beatae numquam, non est impedit possimus.
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
