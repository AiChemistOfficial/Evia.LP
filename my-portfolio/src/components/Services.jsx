import { forwardRef, useEffect, useState } from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import bookingImg from '../assets/bookingServices.jpeg';
import tripPlanningImg from '../assets/tripPlanningService.jpeg';

const Services = forwardRef(({ activeTab = 'first' }, ref) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const services = [
    {
      title: "EV Booking Charging Slots",
      description: "Book charging stations.",
      imageUrl: bookingImg,
      comingSoon: {
        title: "Coming Soon",
        message: "Exciting features are on the way!"
      }
    },
    {
      title: "Trip Planning Assistant",
      description: "Plan your entire EV trip including charging stations and pit stops.",
      imageUrl: tripPlanningImg,
      comingSoon: {
        title: "Coming Soon",
        message: "Plan smart, travel smarter — stay tuned!"
      }
    }
  ];

  return (
    <section className="services" id="Services" ref={ref}>
      <Container>
        <Row>
          <Col>
            <h2>Our Services</h2>
            <Tab.Container id="services-tabs" activeKey={currentTab} onSelect={(k) => setCurrentTab(k)}>
              <Nav variant="pills" className="mb-3 justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">EV Charging Booking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Trip Planning</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h3>{services[0].title}</h3>
                  <p>{services[0].description}</p>
                  <Row className="align-items-center">
                    <Col md={8}>
                      <img
                        src={services[0].imageUrl}
                        alt={services[0].title}
                        className="service-image"
                      />
                    </Col>
                    <Col md={4}>
                      <div className="coming-soon-box">
                        <h4>{services[0].comingSoon?.title}</h4>
                        <p>{services[0].comingSoon?.message}</p>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h3>{services[1].title}</h3>
                  <p>{services[1].description}</p>
                  <Row className="align-items-center">
                    <Col md={8}>
                      <img
                        src={services[1].imageUrl}
                        alt={services[1].title}
                        className="service-image"
                      />
                    </Col>
                    <Col md={4}>
                      <div className="coming-soon-box">
                        <h4>{services[1].comingSoon?.title}</h4>
                        <p>{services[1].comingSoon?.message}</p>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Services;

