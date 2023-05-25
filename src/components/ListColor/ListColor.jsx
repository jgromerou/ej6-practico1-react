import { Card, Row, Col, Button } from 'react-bootstrap';
import './list-color.css';

const ListColor = ({ listaColores }) => {
  const colorDiv = { background: 'blue' };
  return (
    <>
      <Row className="my-4">
        <Col md={6} lg={4} xl={3} className="mb-3">
          <Card>
            <div className="colorBox w-100" style={colorDiv}></div>
            <Card.Body className="d-flex justify-content-between px-4">
              <Card.Title className="fw-bold text-uppercase">azul</Card.Title>
              <Button variant="danger">Borrar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} xl={3} className="mb-3">
          <Card>
            <div className="colorBox w-100" style={colorDiv}></div>
            <Card.Body className="d-flex justify-content-between px-4">
              <Card.Title className="fw-bold text-uppercase">azul</Card.Title>
              <Button variant="danger">Borrar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} xl={3} className="mb-3">
          <Card>
            <div className="colorBox w-100" style={colorDiv}></div>
            <Card.Body className="d-flex justify-content-between px-4">
              <Card.Title className="fw-bold text-uppercase">azul</Card.Title>
              <Button variant="danger">Borrar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {listaColores.map((color, index) => console.log(color, index))}
    </>
  );
};

export default ListColor;
