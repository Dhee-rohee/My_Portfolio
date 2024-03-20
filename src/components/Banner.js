import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ()=>{

const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Web Developer", "Web Designer"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
}, [text, delta, loopNum]);
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! my name is Abdulwahab Roheemat Damilola, I am a`} <span className="wrap">{text}</span></h1>
                        <p> 
My journey into the world of web development is marked by an insatiable curiosity and a relentless pursuit of excellence. With a keen eye for detail and a mind wired for problem-solving, I transforms ideas into interactive and visually stunning websites. My coding prowess, especially in HTML, CSS, Bootstrap, JavaScript and React forms the foundation of my digital artistry..</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div>}
            </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                    <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
                </Row>
            </Container>
               </section>
             
    )                         
}