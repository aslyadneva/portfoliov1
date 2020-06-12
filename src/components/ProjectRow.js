import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectRow = ({name, images: {small, medium, large}, keywords, reversed, description}) => {
  if (reversed) {
    return ( 
      <div className="Projects__row Projects__row--reversed">

        {/* Image */}
        <picture className="Projects__row__image">
          <source media="(min-width:1000px)" srcSet={large} />
          <source media="(min-width:700px)" srcSet={medium}/>
          <img src={small} className="Projects__img" alt="instagram dashboard site"/>
        </picture>
            
        {/* Description */}
        <div className="Projects__row__description">

          <a href="https://github.com" target="_blank" rel="noopener_noreferrer">
            <div className="Projects__projectName Lead Lead--secondary">{name}</div>
          </a>         

          <div className="Projects__row__description__keywords">
            {keywords.map(keyword => <span>{`${keyword} / `}</span>)}
          </div>

          <aside><p className="Projects__row__description__text">{description} </p></aside>

          <div className="Projects__row__links">
            <a 
              className="Projects__row__description__iconLink"
              href="https://github.com" 
              target="_blank" 
              rel="noopener_noreferrer" 
              style={{ fontSize: "1.6rem" }}
            >
              <FaGithub />
            </a>
            <a 
              className="Projects__row__description__iconLink"
              href="https://github.com" 
              rel="noopener_noreferrer" 
              target="_blank"         
              style={{ fontSize: "1.6rem" }}
            >
              <FaExternalLinkAlt />
            </a>
          </div>

        </div>

      </div>    
    )
  } else if (!reversed) {
    return (
           <div className="Projects__row">
            
            {/* Description */}
            <div className="Projects__row__description">

          <a href="https://github.com" target="_blank" rel="noopener_noreferrer">
            <div className="Projects__projectName Lead Lead--secondary">{name}</div>
          </a>         

              <div className="Projects__row__description__keywords">
                {keywords.map(keyword => <span>{`${keyword} / `}</span>)}
              </div>


              <aside style={{ color: '#404040'}}>
                <p className="Projects__row__description__text">{description} </p>
              </aside>

             
              <div className="Projects__row__links">
                <a className="Projects__row__description__iconLink" href="https://github.com" target="_blank" rel="noopener_noreferrer" style={{ fontSize: "1.6rem" }}>
                  <FaGithub />
                </a>
                <a className="Projects__row__description__iconLink" href="https://github.com" target="_blank" rel="noopener_noreferrer" style={{ fontSize: "1.6rem" }}>
                  <FaExternalLinkAlt />
                </a>       
              </div>

            </div>

            {/* Image */}
            <picture className="Projects__row__image">
              <source media="(min-width:1000px)" srcSet={large} />
              <source media="(min-width:700px)" srcSet={medium} />
              <img src={small} className="Projects__img" alt="instagram dashboard site" />
            </picture>
          </div>
    )
  }  
}

export default ProjectRow
