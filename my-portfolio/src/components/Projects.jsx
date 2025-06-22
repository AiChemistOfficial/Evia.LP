import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import websiteVideo from '../assets/websiteVideo.mp4';
import appVideo from '../assets/appVideo.mp4';

const Projects = () => {
  const projects = [
    {
      title: "Website Prototype",
      description: "The prototype of how our website will work",
      videoUrl: websiteVideo
    },
    {
      title: "App Prototype",
      description: "The prototype of how our app will work",
      videoUrl: appVideo
    }
  ];

  return (
    <section className="project" id="Prototype">
      <Container>
        <Row>
          <Col>
            <h2>Prototype Working</h2>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="mb-3 justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">Website Prototype</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">App Prototype</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h3>{projects[0].title}</h3>
                  <p>{projects[0].description}</p>
                  <video className="custom-video"
  controls
  autoPlay
  muted
  playsInline>
                    <source src={projects[0].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h3>{projects[1].title}</h3>
                  <p>{projects[1].description}</p>
                  <video className="custom-video"
  controls
  autoPlay
  muted
  playsInline>
                    <source src={projects[1].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
