import "aos/dist/aos.css";
import "./experience.css";
import AOS from "aos";
import Figma from "../../assets/tech/figma.png";
import Adobe_xd from "../../assets/tech/Adobe_xd.png";
import Adobe_Illustrator_CC_icon from "../../assets/tech/Adobe_Illustrator_CC_icon.png";
import  miro from "../../assets/tech/miro.png";

// ..
AOS.init({
  duration: 2000,
});

const skillData = [
 
  {
    skill: "Adobe xd",
    img: Adobe_xd,
  },
 
  {
    skill: "Figma",
    img: Figma,
  },
  {
    skill: "Adobe I",
    img: Adobe_Illustrator_CC_icon,
  },
  
  {
    skill: "Miro",
    img: miro,
  },
  
]

const educationData = [
  {
    id: 1,
    cert: 'JSCE',
    sch: "Federal Science and Technical college yaba",
    year: '2017 - 2019',
  },
  {
    id: 2,
    cert: 'SSCE',
    sch: " Federal Science and Technical college yaba",
    year: '2020 - 2022',
  },
  {
    id: 3,
    cert: 'UI/UX DESIGN CERTIFIED',
    sch: "Google Coursera certificate program ",
    year: '2022 - 2023',
  },
  {
    id: 4,
    cert: ' Computer education',
    sch: "TADEC ",
    year: '2018 - 2019',
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills I Have </h5>
      <h2> My Skills & Education </h2>
      <div className="underline"></div>

      <div className="container experience__container" data-aos="fade-up" data-aos-duration="3000">
        <h4 className='intro'> I am an highly skilled and motivated individual wiith a strong background in the following technologies </h4>
        <div className="experience__frontend">

        <div className="experience__content">
          {
          skillData.map(({skill, img})=>{
            return(
              <article className="experience__details" key={img}>
              <div className='techContainer'>
                <img className='tech__img' src={img} alt="Technology" />
              <p className="text">{skill}</p>
              </div>
            </article>
                   )
                  })
                }
                </div>
        </div>

        <div className="experience__Backend"  data-aos="fade-up" data-aos-duration="3000">
        <p className='eduTitle'> Education </p>
        <div className="underline"></div>
          <div className="experience__content2">
            {
              educationData.map(({ id, cert, sch, year })=>{
                return (
            <article className="experience__details" key={id}>
              <h5 className="cert"> {cert} </h5>
              <div className="schoolYear">
                <p> {sch} </p>
                <small className='year'> {year} </small>
              </div>
            </article>
                )
              })
            }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience