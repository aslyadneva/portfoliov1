import React from 'react'
import Header from '../ui/Header'

import jsLogo from '../assets/logos/js.png'
import reactLogo from '../assets/logos/react.png'
import cssLogo from '../assets/logos/css.png'
import htmlLogo from '../assets/logos/html.png'
import es6Logo from '../assets/logos/es6.png'
import bootstrapLogo from '../assets/logos/bootstrap.png'
import reduxLogo from '../assets/logos/redux.png'
import nodejsLogo from '../assets/logos/nodejs.png'
import webpackLogo from '../assets/logos/webpack.png'
import sassLogo from '../assets/logos/sass.png'
import wordPressLogo from '../assets/logos/wordpress.png'
import gatsbyLogo from '../assets/logos/gatsby.png'
 
 
const Technologies = () => {
  return (
   <section className="Technologies SectionNarrow">
     <Header title="Technologies"/>
     <main className="Technologies__main">
        <article className="Technologies__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quo doloremque necessitatibus, similique dolore quos omnis. 
        </article>   
     </main>
     <div className="Technologies__media">
       <img className="Technologies__logo" src={jsLogo} alt="Javascript logo"/>
       <img className="Technologies__logo" src={reactLogo} alt="React logo"/>
       <img className="Technologies__logo" src={cssLogo} alt="CSS logo"/>
       <img className="Technologies__logo" src={htmlLogo} alt="HTML logo"/>
       <img className="Technologies__logo" src={sassLogo} alt="SCSS logo"/>
       {/* <img className="Technologies__logo" src={es6Logo} alt="ES6 logo"/> */}
       <img className="Technologies__logo" src={bootstrapLogo} alt="Bootstrap logo"/>
       <img className="Technologies__logo" src={reduxLogo} alt="Redux logo"/>
       <img className="Technologies__logo" src={nodejsLogo} alt="NodeJS logo"/>
       <img className="Technologies__logo" src={webpackLogo} alt="Webpack logo"/>
       <img className="Technologies__logo" src={wordPressLogo} alt="Wordpress logo"/>
       <img className="Technologies__logo" src={gatsbyLogo} alt="Gatsby logo"/>
     </div>
   </section>
  )
}

export default Technologies
