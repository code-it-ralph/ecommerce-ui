import React from 'react';
import { Form, Button, Container, Card, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';


export default function DashboardAllOrdersCard({orderedProp}) {

  const [orderedItems, setOrderedItems] = useState([]);

  const { productName, quantity, price } = orderedProp;
  // useEffect(() => {
  //     orders.map(items => {
  //         setOrderedItems(items)
  //     })
  // }


  return (
    <Container className="library-container">
      <Card>
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Price: Php{price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
};