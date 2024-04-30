import React from 'react'
// import CV from '../../assets/cv.pdf'
import CVT from "../../assets/CVT.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVT} download className='btn'> Download CV </a>
        <a href="#contact" className='btn btn-primary'> Let's Talk </a>
    </div>
  )
}

export default CTA