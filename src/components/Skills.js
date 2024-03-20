import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/icons8-html-240.svg";
import css from "../assets/img/icons8-css.svg";
import js from "../assets/img/icons8-javascript.svg";
import react from "../assets/img/icons8-react-480.svg";
import node from "../assets/img/icons8-node-js.svg";
import boosstrap from "../assets/img/icons8-bootstrap.svg";
import tailwind from "../assets/img/icons8-tailwind-css.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

return (
  <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>i love coding as a passionate web developer.<br></br> these are the program languages i work with .</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Images" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Images" />
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                                <img src={boosstrap} alt="Images" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Images" />
                                <h5>Tailwind css</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Images" />
                                <h5>Js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Images" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Images" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Images" />
    </section>
)
  }