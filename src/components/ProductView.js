import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';
// to consume a user details upon hitting enroll button
// to share values from your components to other components
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function CourseView() {

    const { user } = useContext(UserContext);

    // When using history. push() method, the JSX in your return statement can still mount and run, whereas returning Redirect can block the rest of your code
    const history = useHistory();


    // The useParams hook allows us to retrieve the courseId passed via URL
    const { productId } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState()

    // an Enroll Function to enroll a user to a specific course
    function buy(e) {

        e.preventDefault();

        fetch(`https://murmuring-citadel-59250.herokuapp.com/ecommerce/users/checkout`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                productId: productId,
                quantity: quantity
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data === true) {
                    Swal.fire({
                        title: "Successfully Added",
                        icon: "success",
                        text: "Product successfully added to you cart."
                    })
                    history.push("/library");
                }
                else {
                    Swal.fire({
                        title: "Something went wrong.",
                        icon: "error",
                        text: "Please try again."
                    })
                }
            })
    }

    // The useEffect hook is used to check if the courseId is retrieved properly
    useEffect(() => {
        console.log(productId);

        fetch(`https://murmuring-citadel-59250.herokuapp.com/ecommerce/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setName(data.name);
                setDescription(data.description);
                setPrice(data.price);
            })
    }, [productId]);

    return (
        <Container className='mt-5' style={{ height: "80vh" }}>
            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Card className="mb-5">
                        <Card.Body className="text-center">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text></Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Card.Subtitle>Price: Php{`${price}`}</Card.Subtitle>
                            <Card.Text> </Card.Text>
                            <Form.Group className="mb-4" controlId="quantiy">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Quantity"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            {
                                user.id !== null ?
                                    <Button className='productBtn' type="submit" variant="secondary" onSubmit={(e) => buy(e)}>Add to Cart</Button>
                                    :
                                    <Link className='productBtn btn btn-secondary btn-block' to="/login">Login to Purchase</Link>
                            }

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}