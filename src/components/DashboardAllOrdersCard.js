/* Bootstrap & Styling */
import { Form, Button, Container, Card } from 'react-bootstrap';

/* React */
import { Link, NavLink } from 'react-router-dom';


export default function DashboardAllOrdersCard({ productProp }) {
  
    const { _id, productName, description } = productProp;


    return (
        <Container className="library-container">
        <Card>
            <Card.Body>
                <Card.Title>{_id}</Card.Title>
                <Card.Subtitle>{description}</Card.Subtitle>
                <Card.Text>{productName}</Card.Text>
                {/* <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {price}</Card.Text> */}
                {/* <Link className='productBtn btn btn-light mx-2' to={`/updateproduct/${_id}`}>Update</Link> */}
            </Card.Body>
        </Card>
        </Container>
    )
};