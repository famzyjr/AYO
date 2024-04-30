import "aos/dist/aos.css";
import "./contact.css";
import AOS from "aos";
import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

// ..
AOS.init({
  duration: 2000,
});


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
   

    emailjs
      .sendForm('service_oidc5kk', 'template_y274j19', form.current, {
        publicKey: 'nU0sC09wFflr-4Tk7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); 
      e.preventDefault();
  };
  return (
    <section id="contact" data-aos="zoom-in-down">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="underline"></div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ayomidefashanu00@gmail.com</h5>
            <a href="mailto:ayomidefashanu00@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Fashanu Ayomide</h5>
            <a href="https://m.me/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+234 706 663 9318</h5>
            <a target="_blank" href="https://wa.me/qr/EZSGYCFOMFJIM1">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact