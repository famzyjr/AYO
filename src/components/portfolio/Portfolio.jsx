import "aos/dist/aos.css";
import "./portfolio.css";
import AOS from "aos";
import React from "react";
import q from "../../assets/work/q.jpg";
import a from "../../assets/work/a.jpg";
import e from "../../assets/work/e.jpg";
import r from "../../assets/work/r.jpg";
import i from "../../assets/work/i.jpg";
import n from "../../assets/work/n.jpg";

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    img: q,
    title: "An art history mobile and web app",
    behance: "",
    desc: "An applicaton that offers users with the love of arts and culture free and easy access to a wide range of histories",
    demo: "#",
  },

  {
    id: 6,
    img: n,
    title: "An e-commerce mobile app",
    behance: "",
    desc: "Mobile app for buying and selling between a wide variety of vendors",
    demo: "",
  },

  {
    id: 1,
    img: r,
    title: "A cloth brand saless app",
    behance: "",
    desc: "This a mobile app for an online cloth vendor that owns their brand brand",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Portfolio </h2>
      <div className="underline"></div>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, behance, demo, desc }) => {
          return (
            <article className="portfolio__item" key={id} data-aos="flip-left">
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3> {title} </h3>
              <p className="porfolio__desc"> {desc}</p>
              <div className="portfolio__item-cta">
                <a
                  href={behance}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
