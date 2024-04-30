import "aos/dist/aos.css";
import "./about.css";
import AOS from "aos";
// import ME from "../../assets/crop.jpg";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";
import AY from "../../assets/tech/AY.jpg";

AOS.init({
  duration: 2000,
});

const about = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AY} alt="Abdulrafiu Mubarak" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects </h5>
              <small> 10+ Completed </small>
            </article>
          </div>
          <p>
            Hi! Ayomide is the name . I am a UI/UX designer. I am passionate
            about the growing world of technology and I wish to be a part of it.
            With my skills and knowledge in technology, I thrive in dynamic
            environments, collaborating with cross-functional teams and
            individuals with more experience than myself, I am eager to advance
            in my field and deliver visually stunning and user-centric
            interfaces .I’m excited to partner with you!
          </p>

          <div className="about__socials">
            <a
              href="https://www.linkedin.com/in/ayomide-fashanu-833624262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/twt_ayomi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <IoLogoTwitter />{" "}
            </a>
            <a
              href="https://www.behance.net/fashanuayomide"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaBehanceSquare />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
