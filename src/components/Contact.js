import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
export const Contact = () => {
 
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(data);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(data);
    var temp = {
      to_name: data.name,
      from_name: data.email,
      message: data.message,
    };

    emailjs
      .send("service_xney1um", "template_kgoaaed", temp, "Yy8RGXM6eq_xA34Ts")
      .then((response) => {
        toast.success("Email sent successfully",{
            position: "bottom-center",
           
        })
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        toast.error("Try again",{
            position: "bottom-center",
           
        })
        console.error("Email error:", error);
      });
    setButtonText("Send");
    setData({
        name: "",
        email: "",
        message: "",
      });
    
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="text"
                          name="name"
                          value={data.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate(e)}
                        />
                      </Col>
                    

                     </Row>
                     <Row>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate(e)}
                        />
                      </Col>
                    <Row>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={data.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate(e)}
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
