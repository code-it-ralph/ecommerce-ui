/* Bootstrap & Styling */
import { Form, Button, Container, Card } from 'react-bootstrap';

import { useState, useEffect } from 'react';


export default function DashboardAllOrdersCard({ productProp }) {

    const { _id, orders, description } = productProp;
    
   



    return (
        <Container className="library-container">
            <Card>
                <Card.Body>
                    <Card.Title>{_id}</Card.Title>
                    <Card.Subtitle>{ }</Card.Subtitle>
                    <Card.Text>{ }</Card.Text>
                    {/* <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {price}</Card.Text> */}
                    {/* <Link className='productBtn btn btn-light mx-2' to={`/updateproduct/${_id}`}>Update</Link> */}
                </Card.Body>
            </Card>
        </Container>
    )
};