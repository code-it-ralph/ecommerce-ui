/* Bootstrap & Styling */
import { Form, Button, Container, Card } from 'react-bootstrap';

import { useState, useEffect } from 'react';


export default function DashboardAllOrdersCard({ productProp }) {

    const [orderedItems, setOrderedItems] = useState([]);
    const { _id, orders } = productProp;
    
    
    useEffect(() => {
        orders.map(items => {
            setOrderedItems(items)
        })
    })
    

    return (
        <Container className="library-container">
            <Card>
                <Card.Body>
                    <Card.Title>{ orderedItems.productName }</Card.Title>
                    <Card.Subtitle>Ordered by: { orderedItems.userId }</Card.Subtitle>
                    <Card.Text>Quantity: { orderedItems.quantity }</Card.Text>
                    <Card.Text>Total Amount: Php{ orderedItems.totalAmount }</Card.Text>
                    <Card.Text>Purchased On: { orderedItems.purchasedOn }</Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>
    )
};