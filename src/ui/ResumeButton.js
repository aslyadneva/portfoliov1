import React from 'react'
import resume from '../assets/Anastasia_Slyadneva_Resume.pdf'

const ResumeButton = () => {
  return (
    <a href={resume} download="Anastasia_Slyadneva_Resume" className="ResumeButton">Resume</a>
  )
}

export default ResumeButton
