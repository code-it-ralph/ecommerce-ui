import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header(props) {
  return (
    <Container className="block row center">
      <div>
        <h2>Your Cart</h2>
      </div>
      <div>
        Cart {
          props.countCartItems ? (<button className="badge">{props.countCartItems}</button>)
            :
            (
              ''
            )
        }
      </div>
    </Container>
  );
}