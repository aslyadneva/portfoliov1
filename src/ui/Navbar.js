import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Navbar extends Component {
  render () {
    const {type, items, toggleSideNav} = this.props
    
    if (type === 'primary') {
      return (
        <nav className='Navbar'>
          
          <div className="Navbar__icon" onClick={toggleSideNav}>
            <div className="Navbar__icon--middle"></div>
          </div>
          
          <div className={`Navbar__items Navbar__items--${type}`}> 
            {items.map(item => (
              <Link className="Navbar__item" to={item.toLowerCase()} smooth={true} key={item}>{item}</Link>
            ))}
          </div>   
 
        </nav>  
      )
    } else if (type === 'socials') {
      return (
        <nav className='Navbar'>
          <div className={`Navbar__items Navbar__items--${type}`}> 
            {items.map(item => (
              <a 
                href={`http://www.${item.props.className.split(' ')[0]}.com/aslyadneva`}  
                target="_blank" rel="noopener noreferrer" 
                className="Navbar__item" 
                key={item}
                type='icon' 
                style={{fontSize: '2rem'}}
              >
                {item}
              </a>
            ))}
          </div>   
        </nav> 
      )
    } else if (type === 'secondary') {
      return (
        <nav className='Navbar'>
          <div className={`Navbar__items Navbar__items--${type}`}> 
            {items.map(item => (
              <span className="Navbar__item" key={item}>{item}</span>
            ))}
          </div>   
        </nav> 
      )
    }
  }
  
}

export default Navbar; 
