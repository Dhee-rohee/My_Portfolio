import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/home.png";
import projImg2 from "../assets/img/huddle.png";
import projImg3 from "../assets/img/flyo.png";
import projImg4 from "../assets/img/text.png";
import projImg6 from "../assets/img/colunms.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = ()=> {

    const projects = [
        {
          title: "Business Startup",
          description: "trasportation website",
          imgUrl: projImg1,
        },
        {
          title: "Huddle landing page",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "flyo landing page",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg4,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg6,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg6,
        },
      ];
   return(
<section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are images of a few projects I've worked on using html,css,bootstrap,js,react,php and nodejs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I hope u love what you see, im always availabe for collaborations. You can visit my github for more projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Hope to hear from you soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt = ""></img>
    </section>
   ) 
}