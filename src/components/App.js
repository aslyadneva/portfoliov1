import React, {Fragment, Component} from 'react'; 
import Home from './Home'; 
import Projects from './Projects'; 
import Contact from './Contact';
import About from './About';
import SideNav from './SideNav';
import Footer from './Footer';
import { Element, animateScroll } from 'react-scroll'; 




class App extends Component {
  state = {
    sideNavOpen: false,
  }

  toggleSideNav = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen})
  }

  scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  render () {
    const { sideNavOpen } = this.state
    if (sideNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return (
      <Fragment>  
        <SideNav open={sideNavOpen} toggleSideNav={this.toggleSideNav}/> 

        <Home toggleSideNav={this.toggleSideNav}/>

        <Element name="about">
          <About />
        </Element>
        
        <Element name="projects">
          <Projects viewProject={this.handleViewProject}/>
        </Element> 

        <Element name="contact">
          <Contact scrollToTop={this.scrollToTop}/>
        </Element>   

        <Footer/>        
      </Fragment>
    )
  }  
}

export default App; 
