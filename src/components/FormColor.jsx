import { Card, Form, Button } from 'react-bootstrap';
import ListColor from './ListColor/ListColor';

const FormColor = () => {
  return (
    <>
      {/* Agrego una card */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
            Administrar Colores
          </Card.Title>
          {/* Agrego un formulario  */}
          <Form>
            <Form.Group className="mb-3" controlId="inputColor">
              <Form.Label className="display-6">Ingrese un color:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un color como por ej: Blue"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ListColor />
    </>
  );
};

export default FormColor;
