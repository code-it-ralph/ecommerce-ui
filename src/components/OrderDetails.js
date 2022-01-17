/* Bootstrap */
import { Container, Card } from 'react-bootstrap';

export default function OrderDetails({ orderProp }) {

    const { productName, quantity, price } = orderProp;

    return (
        <Container>
            <h1> Your Cart</h1>
            <Card className="mb-2">
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Price: Php {price}</Card.Text>

                </Card.Body>
            </Card>
        </Container>
    );
    // end of export
};