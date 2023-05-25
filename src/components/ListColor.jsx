import { Row } from 'react-bootstrap';
import CardColor from './CardColor/CardColor';

const ListColor = ({ listaColores }) => {
  return (
    <>
      <Row className="my-4">
        {listaColores.map((color, index) => (
          <CardColor key={index} color={color} />
        ))}
      </Row>
    </>
  );
};

export default ListColor;
