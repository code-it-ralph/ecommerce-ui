import CartHeader from './CartHeader';
import CartMain from './CartMain';
import CartBasket from './CartBasket';
import CartData from './CartData';
import { useState, useEffect } from 'react';

import React from 'react';
import { Container } from 'react-bootstrap';
// import CartProduct from './CartProduct';

export default function CartApp() {

  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/ecommerce/users/my_orders`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(
          data.orders.map(items => {
            return (
              //<CartProduct key={items.productName + items.purchasedOn} orderedProp={items}/>
              items
            );
          })
        )
      })
  }, []);


  // const { products } = CartData;
  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {

    const exist = cartItems.find((x) => x.productId === product.productId);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } 
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };


  const onRemove = (product) => {

    const exist = cartItems.find((x) => x.productId === product.productId);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    }
    else {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <div className="App">
      <CartHeader countCartItems={cartItems.length} />
      <div className="row">
        <CartMain products={products} onAdd={onAdd} />
        <CartBasket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
}