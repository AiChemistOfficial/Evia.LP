import { useState } from "react"
import banner1 from '../assets/Header.png'
import { Col, Container, Row } from "react-bootstrap"
const Contact = () =>{
  const formIntialDetails ={
    firstname:'',
    lastname:'',
    email:'',
    phoneno:'',
    message:''
  }
  const [formDetails,setFormDetails] = useState(formIntialDetails)
  const [buttonText,setButtonText] = useState('Send')
  const [status,setStatus] = useState({})
  const onFormUpdate = (category,value) => {
    setFormDetails({
      ...formDetails,
      [category]:value
    }) 
  }

  const handleSubmit = async (e) =>{
      e.preventDefault()
      setButtonText('Sending....')
      try {
        let response = await fetch("http://localhost:5050/Contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(formDetails),
        });
    
        const result = await response.json();
        setFormDetails(formIntialDetails);
        setButtonText("Send");
    
        if (result.code === 200) {
          setStatus({ success: true, message: "Message sent successfully" });
        } else {
          setStatus({ success: false, message: "Message not sent successfully" });
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setStatus({ success: false, message: "Failed to connect to server" });
        setButtonText("Send");
      }
    };
  return(
    <section className="contact" id="Contact">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
          <img src={banner1} alt="" />
          </Col>
          <Col md={6}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
                <input type="text" value={formDetails.firstname}  placeholder="FirstName" onChange={(e)=>onFormUpdate('firstname',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="text" value={formDetails.lastname}  placeholder="LastName" onChange={(e)=>onFormUpdate('lastname',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="email" value={formDetails.email}  placeholder="email" onChange={(e)=>onFormUpdate('email',e.target.value)}></input>
              </Col>
              <Col sm={6} className="px-1">
              <input type="tel" value={formDetails.phoneno}  placeholder="PhoneNo:" onChange={(e)=>onFormUpdate('phoneno',e.target.value)}></input>
              </Col>
              <Col>
              <textarea name="" id="" cols="30" rows="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
              <button type="submit" ><span>{buttonText}</span></button>
              </Col>
              {
                status.message &&
                <Col>
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>

                </Col>
              }
            </Row>
          </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact