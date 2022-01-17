/* Bootstrap */
import { Button, Card, Container } from 'react-bootstrap';

/* React */
import { Link } from 'react-router-dom';
import Proptypes  from 'prop-types';

export default function ProductCard({ productProp }) {
  
    const { _id, name, description } = productProp;


    return (
        <Container className="library-container">
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <Card.Text></Card.Text>
                {/* <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {price}</Card.Text> */}
                <Link className='productBtn btn btn-light mx-2' to={`/library/${_id}`}>Details</Link>
            </Card.Body>
        </Card>
        </Container>
    )
}