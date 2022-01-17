/* Bootstrap & Styling */
import { Form, Button, Container, Card } from 'react-bootstrap';

/* React */
import { Link, NavLink } from 'react-router-dom';


export default function DashboardProductCard({ productProp }) {
  
    const { _id, name, description, price } = productProp;


    return (
        <Container className="library-container">
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <Card.Text></Card.Text>
                {/* <Card.Subtitle>Price:</Card.Subtitle> */}
                <Card.Text>Php {price}</Card.Text>
                <Link className='productBtn btn btn-light mx-2' to={`/updateproduct/${_id}`}>Update</Link>
            </Card.Body>
        </Card>
        </Container>
    )
};