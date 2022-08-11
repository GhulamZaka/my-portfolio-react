import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sink from "../../assets/images/despression-sink.jpg";
import Trip from "../../assets/images/Dream-Trip.png";
import Run from "../../assets/images/run-buddy.jpg";
import Food from "../../assets/images/food-festival.jpg";
import Weather from "../../assets/images/weather-forecast.jpg";
import Photo from "../../assets/images/photo-port.jpg";

function Project() {
  return (
    <div>
      <h2>Projects</h2>
      <Row xs="1" lg={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={Sink} />
            <Card.Body>
              <Card.Link href="https://depression-sink.herokuapp.com/">
                Depression-Sink
              </Card.Link>
              <Card.Link href="https://github.com/hectorromo06/depression-sink">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Trip} />
            <Card.Body>
              <Card.Link href="https://dawsonnichols.github.io/DreamTrip-/">
                Dream-Trip
              </Card.Link>
              <Card.Link href="https://github.com/dawsonnichols/DreamTrip-">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Run} />
            <Card.Body>
              <Card.Link href="https://ghulamzaka.github.io/run-buddy/">
                Run-Buddy
              </Card.Link>
              <Card.Link href="https://github.com/GhulamZaka/run-buddy">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Weather} />
            <Card.Body>
              <Card.Link href="https://ghulamzaka.github.io/weather-forecast/">
                Weather Forecast
              </Card.Link>
              <Card.Link href="https://github.com/GhulamZaka/weather-forecast">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Food} />
            <Card.Body>
              <Card.Link href="https://ghulamzaka.github.io/food-festival/index.html">
                Food Festival
              </Card.Link>
              <Card.Link href="https://github.com/GhulamZaka/food-festival">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Link href="https://ghulamzaka.github.io/photo-port/#about">
                Photo Port
              </Card.Link>
              <Card.Link href="https://github.com/GhulamZaka/photo-port">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Project;
