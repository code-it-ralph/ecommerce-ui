/* Bootstrap & Styling */
import { Form, Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';

/* React */
import { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import UserContext from '../UserContext';
import { Link, NavLink } from 'react-router-dom';




export default function CreateProduct() {

    // Allows to consume the User context object and it's properties to use for user validation
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const { userId } = useParams();

    // State hooks to store the values of the input fields
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    // State to determine wether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);
    const token = localStorage.getItem('token');


    // Register a user if no duplicate email found
    function registerProduct(e) {

        e.preventDefault();


        fetch('https://murmuring-citadel-59250.herokuapp.com/ecommerce/products/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName,
                description: description,
                price: price
            })

        })
            .then(res => res.json())
            .then(data => {


                if (data === true) {

                    // to clear input fields
                    setProductName('');
                    setDescription('');
                    setPrice('');

                    Swal.fire({
                        title: 'Success',
                        icon: 'success',
                        text: `Product Created!`
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
        if (productName !== '' && description !== '' && price !== '') {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }, [productName, description, price])




    return (
        <Container id="register-container" className="col-12 col-md-6 p-4 animate__animated animate__fadeIn">
            <h1>Create a Product</h1>
            <hr />
            <Form onSubmit={(e) => registerProduct(e)}>

                <Form.Group className="mt-4 mb-4" controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                    />
                </Form.Group>



                {/* Conditionally render submit button based on isActive state */}
                {isActive ?
                    <>
                        <Button variant="primary" type="submit" className="submitBtn">
                            Create
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                    :
                    <>
                        <Button variant="secondary" type="submit" className="submitBtn" disabled >
                            Create
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                }


            </Form>
        </Container>
    )
}