import java from "../assets/img/java.png";
import react from "../assets/img/react.png";
import html from "../assets/img/html.png";
import kotlin from "../assets/img/kotlin.png";
import sql from "../assets/img/sql.png";
import xml from "../assets/img/xml.png";
import css from "../assets/img/css.png";
import cpp from "../assets/img/cpp.png";
import firebase from "../assets/img/firebase.png";
import JavaScript from "../assets/img/javascript.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
const skills = [
  {
    id: 1,
    icon: cpp,
    title: "C++",
  },
  {
    id: 2,
    icon: java,
    title: "Java",
  },
  {
    id: 3,
    icon: sql,
    title: "SQL",
  },
  {
    id: 4,
    icon: kotlin,
    title: "Kotlin",
  },
  {
    id: 5,
    icon: firebase,
    title: "Firebase",
  },
  {
    id: 6,
    icon: html,
    title: "HTML",
  },
  {
    id: 7,
    icon: css,
    title: "CSS",
  },
  {
    id: 8,
    icon: JavaScript,
    title: "JavaScript",
  },
  {
    id: 9,
    icon: react,
    title: "React",
  },
  {
    id: 10,
    icon: xml,
    title: "XML",
  },
];
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                 Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((item) => (
                  <>
                    <div
                      className="item"
                      key={item.id}
                      //  styles={{ width: "204px", height: "204px" }}
                    >
                      <img src={item.icon}  alt="" />
                   
                    <h5>{item.title}</h5>
                    </div>
                  </>
                ))}
                {/* <div className="item">
                  <img src={java} alt="Image" />
                  <h5>App Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
