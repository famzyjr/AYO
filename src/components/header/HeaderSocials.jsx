import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaBehanceSquare } from "react-icons/fa";
import {IoLogoTwitter} from 'react-icons/io'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ayomide-fashanu-833624262/" target="_blank" rel='noopener noreferrer'> <BsLinkedin /></a>
      <a href="https://twitter.com/twt_ayomi" target="_blank" rel='noopener noreferrer'> <IoLogoTwitter /> </a>
      <a href="https://www.behance.net/fashanuayomide" target="_blank" rel='noopener noreferrer'> <FaBehanceSquare/> </a>
    </div>
  )
}

export default HeaderSocials
