import { useState, useEffect, useContext } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';

import Swal from 'sweetalert2';

export default function ProductUpdate() {


    // When using history. push() method, the JSX in your return statement can still mount and run, whereas returning Redirect can block the rest of your code
    const history = useHistory();


    // The useParams hook allows us to retrieve the courseId passed via URL
    const { productId } = useParams();


    // State hooks to store the values of the input fields
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isActive, setIsActive] = useState('');

    // State to determine wether submit button is enabled or not
    const [isDone, setIsDone] = useState(false);
    const token = localStorage.getItem('token');


    useEffect(() => {
        console.log(productId);

        fetch(`${process.env.REACT_APP_API_URL}/ecommerce/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setProductName(data.name);
                setDescription(data.description);
                setPrice(data.price);
            })
    }, [productId]);



    // Register a user if no duplicate email found
    function updateProduct(e) {

        e.preventDefault();


        fetch(`${process.env.REACT_APP_API_URL}/ecommerce/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName,
                description: description,
                price: price,
                isActive: isActive
            })

        })
            .then(res => res.json())
            .then(data => {
                console.log(token);

                if (data === true) {

                    // to clear input fields
                    setProductName('');
                    setDescription('');
                    setPrice('');

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
        if (productName !== '' || description !== '' || price !== '' || isActive !== '') {
            setIsDone(true);
        }
        else {
            setIsDone(false);
        }
    }, [productName, description, price])



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
                        placeholder={`${productName}`}
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={`${description}`}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="price1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={`${price}`}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Form.Group>



                {isDone ?
                    <>
                        <Button type="submit" className="submitBtn btn btn-light">
                            Update
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                    :
                    <>
                        <Button type="submit" className="submitBtn btn btn-light" disabled >
                            Update
                        </Button>
                        <Link className='submitBtn btn btn-light' to={`/admin`}>Cancel</Link>
                    </>
                }


            </Form>
        </Container>
    )

}
