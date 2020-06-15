import React, { Component} from 'react'
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll'
import ResumeButton from '../ui/ResumeButton';

class SideNav extends Component  {
  componentDidMount () {
    window.addEventListener('resize', ({target: { screen }}) => {
      if (screen.width > 669 && this.props.open) {
        this.props.toggleSideNav()
      }
    })
  }

  componentWillUnmount () {
    window.removeEventListener('resize')
  }

  render () {
    const { open, toggleSideNav } = this.props;
    // if (this.state.open) {
    //   document.body.style.overflow = 'hidden'
    // } else {
    //   document.body.style.overflow = 'auto'
    // }

    return (
      <section className={`SideNav SideNav--${open && 'open'}`}>
        
        <div className="SideNav__fill" onClick={toggleSideNav}></div>

        <div className="SideNav__bar">
          
          <div className="SideNav__icon">
            <MdClose onClick={toggleSideNav} />
          </div>
          <nav className="SideNav__navigation">
            
            <ul style={{marginBottom: '5rem'}}>
              <li className="SideNav__navItem">
                <Link onClick={toggleSideNav} to='projects' smooth={true}>
                  Projects
                </Link>
              </li>

              <li className="SideNav__navItem">
                <Link onClick={toggleSideNav} to='contact' smooth={true}>
                  Contact
                </Link>
              </li>
              <li className="SideNav__navItem">
                <Link onClick={toggleSideNav} to='about' smooth={true}>
                  About
                </Link>
              </li>
            </ul>

            <ResumeButton/>

          </nav>
        </div>

      </section>
    )
  }
}

export default SideNav
