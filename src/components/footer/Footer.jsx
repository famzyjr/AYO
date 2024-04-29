import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { FaBehanceSquare } from "react-icons/fa";
import {IoLogoTwitter} from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});



const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-down">
      <a href="#" className='footer__logo'>Fashanu Ayomide</a>


      
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/ayomide-fashanu-833624262/" target="_blank" rel='noopener noreferrer'> <BsLinkedin /></a>
      <a href="https://twitter.com/twt_ayomi" target="_blank" rel='noopener noreferrer'> <IoLogoTwitter /> </a>
      <a href="https://www.behance.net/fashanuayomide" target="_blank" rel='noopener noreferrer'> <FaBehanceSquare/> </a>
      </div>
        <div className="footer__copyright">
          <small>&copy; Copyright <b className='name'>Fashanu Ayomide</b>. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer