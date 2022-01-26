/* Bootstrap & Styling */
import { Form, Button, Container, Card, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

/* React */
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export default function DashboardProductCard({productProp, fetchData}) {

    const { _id, name, description, price, isAdmin, isActive } = productProp;
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token');

    
    

    function archiveProduct() {

        fetch(`${process.env.REACT_APP_API_URL}/ecommerce/products/${_id}/archive`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data === true) {

                    fetchData();

                    Swal.fire({
                        title: "Now Inactive",
                        icon: "success",
                        text: "Product successfully archived."
                    });


                } else {

                    fetchData();

                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "Please try again."
                    });

                }
            })
    }

    function unarchiveProduct() {

        fetch(`${process.env.REACT_APP_API_URL}/ecommerce/products/${_id}/unarchive`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data === true) {

                    fetchData();

                    Swal.fire({
                        title: "Now Active",
                        icon: "success",
                        text: "Product successfully unarchived."
                    });

                } else {

                    fetchData();

                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "Please try again."
                    });

                }
            })
    }

    


    return (
        <Container className="library-container">
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Text>&#8369; {price}</Card.Text>
                    <Link className='productBtn btn btn-light mx-2' to={`/updateproduct/${_id}`}>Update</Link>
                    <span>Status: </span>
                    {isActive ?
                    <Button style={{backgroundColor: "#5F4B32", border: "0px"}} className="col-1" 
                    onClick={() => archiveProduct()}>Active</Button>
                    :
                    <Button style={{backgroundColor: "gray", border: "0px"}} className="col-1" 
                    onClick={() => unarchiveProduct()}>InActive</Button>
                    }
                </Card.Body>
            </Card>
        </Container>
    )
};