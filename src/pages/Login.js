
/* Bootstrap & Styling */
import Nav from 'react-bootstrap/Nav';
import { Form, Button, Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

/* React */
import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Login(props) {
    // Allows to consume the User context object and it's properties to use for user validation
    const { user, setUser } = useContext(UserContext);

    // State hooks for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(localStorage.getItem('role'));

    // State to determine wether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

    // Function to simulate user registration
    function authenticate(e) {
        e.preventDefault();

        fetch(`https://quiet-stream-93181.herokuapp.com/ecommerce/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (typeof data.accessToken !== "undefined") {
                    localStorage.setItem('token', data.accessToken)
                    retrieveUserDetails(data.accessToken);

                    Swal.fire({
                        title: "Login Successful",
                        icon: "success",
                        text: "Welcome to YourBook!"
                    })
                    // history.push("/");
                }
                else {
                    Swal.fire({
                        title: "Authentication Failed",
                        icon: "error",
                        text: "Check you login details and try again."
                    })
                }
            })
        setEmail('');
        setPassword('');

        console.log('User trying to log in...')
    }

    const retrieveUserDetails = (token) => {
        fetch(`https://quiet-stream-93181.herokuapp.com/ecommerce/users/details`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {


                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
                localStorage.setItem('role', data.isAdmin);
            })
    }

    useEffect(() => {
        if (email !== '' && password !== '') {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }, [email, password]);




    return ((user.isAdmin === true) ?
            <Redirect to="/admin" />
            : (user.id !== null) ?
                <Redirect to="/library" />
                :
                <Container id="login-container" className="col-12 col-md-6 p-4 animate__animated animate__fadeIn">
                    <h1>Login</h1>
                    <hr />
                    <Form onSubmit={(e) => authenticate(e)}>

                        <Form.Group className="mb-3" controlid="userEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlid="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className='text-center' >
                            {isActive ?
                                <Button variant="primary" type="submit" className="submitBtn">
                                    Login
                                </Button>
                                :
                                <Button variant="secondary" type="submit" className="submitBtn" disabled >
                                    Login
                                </Button>
                            }
                        </div>

                        <div className="mt-3 text-center" controlid="password">
                            <span>
                                Dont have an account yet?
                                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                            </span>
                        </div>

                    </Form>
                </Container>
    )
}