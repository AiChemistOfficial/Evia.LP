import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-left text-center mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Evia. All rights reserved.</p>
            <p className="mb-0">Email: chemistai.official@gmail.com | Phone: +91 98765 43210</p>
          </Col>
          <Col md={6} className="text-md-right text-center">
            <div className="social-icons">
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com" className="social-icon" target="_blank" rel="noreferrer">
                <img src="/icons/github.svg" alt="GitHub" />
              </a>
              <a href="mailto:mekhaajith2345@gmail.com" className="social-icon">
                <img src="/icons/email.svg" alt="Email" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


