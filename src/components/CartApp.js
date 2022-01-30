import CartHeader from './CartHeader';
import CartMain from './CartMain';
import CartBasket from './CartBasket';
import CartData from './CartData';
import { useState } from 'react';

function CartApp() {

  const { products } = CartData;
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

export default CartApp;