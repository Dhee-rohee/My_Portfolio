import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/dami.jpg.JPG";
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Dhee-rohee"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/roheemat-damilola-8a58a0222/"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/dhee_rohee"><FaInstagram /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}