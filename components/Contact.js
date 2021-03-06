import { Container, Row, Col, Image } from 'react-bootstrap/';

const Contact = () => (
    <div className="contactForm">
      <p className="contact">Contact me</p>
      <Container>
        <Row>
          <Col>
          <main>
        <form className="form" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input className="name" type="text" name="firstname" id="firstname" />
          
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input className="email" type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea className="message" name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button className="send" type="submit">Send</button>
      </p>
    </form>
    </main>          
          </Col>
        </Row>      
      </Container>
      
    <style jsx>{`
      .contact {
        padding: 1em;
        font-size: 35px;
        color: skyblue;
      }
      .contactForm {
        
      }
      .send {
        background-color: indigo;
        color: white;
        padding 5px 15px;
        border-radius: 5px;
        text-transform: uppercase;
        border: none;
        outline: 0;
      }
      .form {
        padding: 1em;
      }
      .message {
        color: black;
        background-color: skyblue;
        border-radius: 5px;
        outline: 0;
        border: none;
        box-shadow: 0 5px 2px -2px rgba(0, 0, 0, .3);
        width: 321px;
        height: 150px;
        resize: none;
      }
      .name {
        color: black;
        background-color: skyblue;
        border-radius: 5px;
        outline: 0;
        border: none;
        box-shadow: 0 5px 2px -2px rgba(0, 0, 0, .3);
      }
      .email {
        color: black;
        background-color: skyblue;
        border-radius: 5px;
        outline: 0;
        border: none;
        box-shadow: 0 5px 2px -2px rgba(0, 0, 0, .3);
      }
    `}</style>
    </div>
  
)

export default Contact;