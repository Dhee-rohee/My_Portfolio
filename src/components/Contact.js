import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";




export const Contact = () => {

 const [name, setName]= useState('');
 const [email, setEmail]= useState('');
 const [message, setMessage]= useState('');
 const [error, setError]= useState('');

 const handleSubmit = async (e) =>{
  e.preventDefault();
  if (!email || !name || !message){
    setError ('please fill out all fields ');
    return;
  }
  try{
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    await emailjs.send (serviceID, templateID,{
  from_name: name,
  reply_to: email,
  message: message
 },publicKey);

 setEmail('')
 setError('')
 setMessage('')
 setName('')
  }catch (error){
    console.error('Error sending mail', error)
    setError ('Error,please try again')
  }
 }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' type="text" className="form-control" id="inputName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' type="email" className="form-control" id="inputEmail" />
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message me...' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  {
                    error && <p>{error}</p>
                  }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}