import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner1 from '../assets/Header.png';

const Banner = ({ onNavigate }) => {
  const [loopnum, setLoopnum] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const toRotate = ["Plan trips ", "Book Slots"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopnum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDelete) {
      setDelta(prev => prev / 2);
    }

    if (!isDelete && updateText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && updateText === '') {
      setIsDelete(false);
      setLoopnum(prev => prev + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to Evia</span>
            <h1>
              EV Travel Made Easy. <span className="wrap">{text}</span>
            </h1>
            <p>
              <b>Why EVIA?</b><br />
              Saves time with pre-booked slots,<br />
              Combines maps, bookings, and support,<br />
              Works across brands, chargers, and cities.
            </p>
            <button onClick={() => onNavigate('first')}>Book Slots</button>
            <button onClick={() => onNavigate('second')}>Plan Trips</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={banner1}
              alt="banner"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
