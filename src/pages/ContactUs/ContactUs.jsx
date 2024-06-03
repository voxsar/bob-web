import React, { useState } from "react";
import "./ContactUs.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="ContactUs-Container">
      <div className="heading-section">
        <Row>
          <Col>Contact Us</Col>
        </Row>
      </div>

      <div className="contact-form-section">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <div className="contact-form">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" name="form_fields[name]" placeholder="Name" required />
                  <Form.Control.Feedback type="invalid">Name is Required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Control required type="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" placeholder="Message" rows={3} required />
                  <Form.Control.Feedback type="invalid">
                  Message is Required
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="send-button" variant="secondary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <div className="address-section">
        <Row>
          <Col>
            <div className="little-falls">
              <div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", color: "#5c5c5c" }}>
                    <p>Little Falls</p>
                    <p
                      style={{
                        marginLeft: 10,
                        borderLeft: "1px solid #000",
                        paddingLeft: 10,
                      }}
                    >
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/47+Broadway+E,+Little+Falls,+MN+56345,+USA/@45.9769412,-94.3671332,17z/data=!3m1!4b1!4m6!3m5!1s0x52b42533ea151fdf:0x58c8036ee9a65ed0!8m2!3d45.9769375!4d-94.3645583!16s%2Fg%2F11bw3z8y4t?entry=ttu">
                        47 East Broadway,
                      </a>
                      <br />
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/47+Broadway+E,+Little+Falls,+MN+56345,+USA/@45.9769412,-94.3671332,17z/data=!3m1!4b1!4m6!3m5!1s0x52b42533ea151fdf:0x58c8036ee9a65ed0!8m2!3d45.9769375!4d-94.3645583!16s%2Fg%2F11bw3z8y4t?entry=ttu">
                        Little Falls, MN
                      </a>{" "}
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/47+Broadway+E,+Little+Falls,+MN+56345,+USA/@45.9769412,-94.3671332,17z/data=!3m1!4b1!4m6!3m5!1s0x52b42533ea151fdf:0x58c8036ee9a65ed0!8m2!3d45.9769375!4d-94.3645583!16s%2Fg%2F11bw3z8y4t?entry=ttu">
                        56345
                      </a>
                      <br />
                      <a style={{ color: "#5c5c5c" }} href="tel:(320) 639-2229">
                        (320) 639-2229
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="saint-cloud">
              <div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", color: "#5c5c5c" }}>
                    <p>Saint Cloud</p>
                    <p
                      style={{
                        marginLeft: 10,
                        borderLeft: "1px solid #000",
                        paddingLeft: 10,
                      }}
                    >
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/710+W+St+Germain+St,+St+Cloud,+MN+56301,+USA/@45.5598745,-94.1633596,17z/data=!3m1!4b1!4m6!3m5!1s0x52b45fd588c442eb:0xfc40dc16be24ee86!8m2!3d45.5598708!4d-94.1607847!16s%2Fg%2F11cscm3nq7?entry=ttu">
                        710 W Germain St.
                      </a>
                      <br />
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/710+W+St+Germain+St,+St+Cloud,+MN+56301,+USA/@45.5598745,-94.1633596,17z/data=!3m1!4b1!4m6!3m5!1s0x52b45fd588c442eb:0xfc40dc16be24ee86!8m2!3d45.5598708!4d-94.1607847!16s%2Fg%2F11cscm3nq7?entry=ttu">
                        Saint Cloud, MN
                      </a>
                      <br />
                      <a style={{ color: "#5c5c5c" }} href="https://www.google.com/maps/place/710+W+St+Germain+St,+St+Cloud,+MN+56301,+USA/@45.5598745,-94.1633596,17z/data=!3m1!4b1!4m6!3m5!1s0x52b45fd588c442eb:0xfc40dc16be24ee86!8m2!3d45.5598708!4d-94.1607847!16s%2Fg%2F11cscm3nq7?entry=ttu">
                        56301
                      </a>
                      <br />
                      <a style={{ color: "#5c5c5c" }} href="tel:(320) 639-2229">
                        (320) 639-2229
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>

          <div className="social-section">
            <Nav className="ml-auto header-social">
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-youtube"></i>
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-tiktok"></i>
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "#5c5c5c" }}>
                <i className="fab fa-pinterest"></i>
              </Nav.Link>
            </Nav>
          </div>
          </Col>
        </Row>
      </div>

      <div className="thanking-section">
        <Row>
          <Col>
            <div className="thanking-paragraph">
              <span>
                Thank you for visiting our website. Please fill out the following form to send us a message.
                Please click on the "SEND" button when you are ready to send your message. You may use this form to
                request more information about our products and services, and to provide feedback about this website.
                We look forward to hearing from you!
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactUs;
