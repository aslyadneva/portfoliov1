import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectRow = ({name, images: {small, medium, large}, keywords, reversed, description, liveURL, gitURL}) => {
  if (reversed) {
    return ( 
      <div className="Projects__row Projects__row--reversed" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" data-aos-once="true">

        {/* Image */}
        <a
          className="Projects__row__image"
          href={liveURL}
          target="_blank"
          rel="noopener_noreferrer"
        > 
          <picture>
            <source media="(min-width:1000px)" srcSet={large} />
            <source media="(min-width:700px)" srcSet={medium} />
            <img src={small} className="Projects__img" alt={name} />
          </picture>
        </a>
            
        {/* Description */}
        <div className="Projects__row__description">

          <a href={liveURL} target="_blank" rel="noopener_noreferrer">
            <div style={{marginBottom: '15px'}} className="Projects__projectName Lead Lead--secondary">{name}</div>
          </a>         

          <div className="Projects__row__description__keywords">
            {keywords.map((keyword, idx) => <span key={`${keyword}-${Math.random()*6}`}>{`${keyword} / `}</span>)}
          </div>

          <aside><p className="Projects__row__description__text">{description} </p></aside>

          <div className="Projects__row__links">
            <a 
              className="Projects__row__description__iconLink"
              href={gitURL} 
              target="_blank" 
              rel="noopener_noreferrer" 
              style={{ fontSize: "1.6rem" }}
            >
              <FaGithub />
            </a>
            <a 
              className="Projects__row__description__iconLink"
              href={liveURL} 
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
      <div className="Projects__row" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" data-aos-once="true">
            
            {/* Description */}
            <div className="Projects__row__description">

          <a href={liveURL} target="_blank" rel="noopener_noreferrer">
            <div style={{ marginBottom: '15px' }} className="Projects__projectName Lead Lead--secondary">{name}</div>
          </a>         

              <div className="Projects__row__description__keywords">
                {keywords.map(keyword => <span key={`${keyword}-${Math.random() * 6}`}>{`${keyword} / `}</span>)}
              </div>


              <aside style={{ color: '#404040'}}>
                <p className="Projects__row__description__text">{description} </p>
              </aside>

             
              <div className="Projects__row__links">
                <a 
                  className="Projects__row__description__iconLink" 
                  href={gitURL} 
                  target="_blank" 
                  rel="noopener_noreferrer" 
                  style={{ fontSize: "1.6rem" }}
                >
                  <FaGithub />
                </a>
                <a 
                  className="Projects__row__description__iconLink" 
                  href={liveURL}
                  target="_blank" 
                  rel="noopener_noreferrer" 
                  style={{ fontSize: "1.6rem" }}
                >
                  <FaExternalLinkAlt />
                </a>       
              </div>

            </div>

            {/* Image */}
            <a
              className="Projects__row__image"
              href={liveURL}
              target="_blank"
              rel="noopener_noreferrer" 
            >
              <picture >
                <source media="(min-width:1000px)" srcSet={large} />
                <source media="(min-width:700px)" srcSet={medium} />
                <img src={small} className="Projects__img" alt={name}/>
              </picture>
            </a>
          </div>
    )
  }  
}

export default ProjectRow
