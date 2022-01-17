import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';
// to consume a user details upon hitting enroll button
// to share values from your components to other components
import UserContext from '../UserContext';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';

export default function ProductUpdate() {

    const { user } = useContext(UserContext);

    // When using history. push() method, the JSX in your return statement can still mount and run, whereas returning Redirect can block the rest of your code
    const history = useHistory();


    // The useParams hook allows us to retrieve the courseId passed via URL
    const { productId, productName } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [quantity, setQuantity] = useState()

    // Allows to consume the User context object and it's properties to use for user validation
    const { userId } = useParams();

    // State hooks to store the values of the input fields
    const [productName1, setProductName1] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price1, setPrice1] = useState('');
    const [isActive, setIsActive] = useState('');

    // State to determine wether submit button is enabled or not
    const [isDone, setIsDone] = useState(false);
    const token = localStorage.getItem('token');


    // The useEffect hook is used to check if the courseId is retrieved properly
    useEffect(() => {
        console.log(productId);

        fetch(`https://quiet-stream-93181.herokuapp.com/ecommerce/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setName(data.name);
                setDescription(data.description);
                setPrice(data.price);
            })
    }, [productId]);



    // Register a user if no duplicate email found
    function updateProduct(e) {

        e.preventDefault();


        fetch(`http://localhost:4001/ecommerce/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName1,
                description: productDescription,
                price: price1,
                isActive: isActive
            })

        })
            .then(res => res.json())
            .then(data => {
                console.log(token);

                if (data === true) {

                    // to clear input fields
                    setProductName1('');
                    setProductDescription('');
                    setPrice1('');

                    Swal.fire({
                        title: 'Success',
                        icon: 'success',
                        text: `Product Updated!`
                    });

                    history.push("/admin");

                } else {

                    Swal.fire({
                        title: 'Something wrong',
                        icon: 'error',
                        text: 'Please try again.'
                    });

                }
            })
    }



    useEffect(() => {
        // Validation to enable the submit buttion when all fields are populated and both passwords match
        if (productName1 !== '' || productDescription !== '' || price1 !== '' || isActive !== '') {
            setIsDone(true);
        }
        else {
            setIsDone(false);
        }
    }, [productName1, productDescription, price1])


    useEffect(() => {
        if (productName1 === '' || productDescription === '' || price1 === '') {
            setProductName1(`${name}`);
            setProductDescription(`${description}`);
            setPrice1(`${price}`);
        }
    })







    return (
        <Container id="register-container" className="col-12 col-md-6 p-4 animate__animated animate__fadeIn">
            <h1>Update a Product</h1>
            <hr />
            <Form onSubmit={(e) => updateProduct(e)}>

                <Form.Group className="mt-4 mb-4" controlId="productName1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        contentEditable="true"
                        type="text"
                        placeholder={`${name}`}
                        value={` ${productName1}`}
                        onChange={e => setProductName1(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={`${description}`}
                        value={` ${productDescription}`}
                        onChange={e => setProductDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="price1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={`${price}`}
                        value={` ${price1}`}
                        onChange={e => setPrice1(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="isActive">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        as="select"
                        placeholder="Available or Not"
                        value={isActive}
                        onChange={e => setIsActive(e.target.value)}
                    >

                        <option type="text" value='' disabled>Avilable or Not?</option>
                        <option type="text" value={true}>Available</option>
                        <option type="text" value={false}>Not Available</option>
                    </Form.Control>
                </Form.Group>



                {/* Conditionally render submit button based on isActive state */}
                {isDone ?
                    <>
                        <Button variant="primary" type="submit" className="submitBtn">
                            Update
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                    :
                    <>
                        <Button variant="secondary" type="submit" className="submitBtn" disabled >
                            Update
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                }


            </Form>
        </Container>
    )

}
