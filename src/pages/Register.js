/* Bootstrap & Styling */
import { Form, Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';

/* React */
import { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import UserContext from '../UserContext';
import { Link, NavLink } from 'react-router-dom';




export default function Register() {

    // Allows to consume the User context object and it's properties to use for user validation
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const { userId } = useParams();

    // State hooks to store the values of the input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    // State to determine wether submit button is enabled or not
    const [isActive, setIsActive] = useState(false);


    // Register a user if no duplicate email found
    function registerUser(e) {

        e.preventDefault();

        fetch('https://murmuring-citadel-59250.herokuapp.com/ecommerce/users/checkemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(res => res.json())
            .then(data => {

                console.log("No email duplicates found. Registering...");

                if (data === true) {

                    Swal.fire({
                        title: 'Duplicate Email Found',
                        icon: 'error',
                        text: 'Provide another email. Try again.'
                    });

                }
                else {
                    fetch('https://murmuring-citadel-59250.herokuapp.com/ecommerce/users/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            firstName: firstName,
                            lastName: lastName,
                            age: age,
                            gender: gender,
                            email: email,
                            password: password1,
                            mobileNo: mobileNo

                        })

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data === true) {

                                // to clear input fields
                                setFirstName('');
                                setLastName('');
                                setAge('')
                                setGender('');
                                setEmail('');
                                setMobileNo('');
                                setPassword1('');
                                setPassword2('');

                                Swal.fire({
                                    title: 'Successfully Registered',
                                    icon: 'success',
                                    text: `Welocome Reader! Let's start reading!`
                                });

                                history.push("/login");

                            } else {

                                Swal.fire({
                                    title: 'Something wrong',
                                    icon: 'error',
                                    text: 'Please try again.'
                                });

                            }
                        })
                }


            })

    }



    useEffect(() => {
        // Validation to enable the submit buttion when all fields are populated and both passwords match
        if ((firstName !== '' && lastName !== '' && age !== '' && gender !== '' && email !== '' && mobileNo.length === 11 && password1 !== '' && password2 !== '') && (password1 === password2)) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }, [firstName, lastName, age, gender, email, mobileNo, password1, password2])




    return (
        (user.id !== null) ?
            <Redirect to="/library" />
            :
            <Container id="register-container" className="col-12 col-md-6 p-4 animate__animated animate__fadeIn">
                <h1>Register</h1>
                <hr />
                <Form onSubmit={(e) => registerUser(e)}>

                    <Form.Group className="mt-4 mb-4" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Age"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            as="select"
                            placeholder="Enter Gender (Male or Female)"
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                            required
                        >

                            <option type="text" value='' disabled>Select a Gender</option>
                            <option type="text" value="male">Male</option>
                            <option type="text" value="female">Female</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="userEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mobileNo">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={mobileNo}
                            onChange={e => setMobileNo(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password1}
                            onChange={e => setPassword1(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password2">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Verify Password"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {/* Conditionally render submit button based on isActive state */}
                    {isActive ?
                        <Button variant="primary" type="submit" className="submitBtn">
                            Submit
                        </Button>
                        :
                        <Button variant="secondary" type="submit" className="submitBtn" disabled >
                            Submit
                        </Button>
                    }

                    <div className="mt-3 text-center" controlid="password">
                        <span>
                            Already have an account?
                            <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
                        </span>
                    </div>


                </Form>
            </Container>
    )
}