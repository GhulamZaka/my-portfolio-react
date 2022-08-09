import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// card = [
//   {
//     title: "",
//     github: "",
//     deployed: "",
//   },
// ];
function Project() {
  return (
    <div>
      <h2>Projects</h2>
      <Row xs="auto" lg={2} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project;
