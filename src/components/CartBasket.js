import React from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export default function Basket(props) {

  const history = useHistory();

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  function checkOut() {


    if (true) {
      Swal.fire({
        title: "Successful!",
        icon: "success",
        text: "Orders successfully checked-out."
      })
      history.push("/library");
    }
    else {
      Swal.fire({
        title: "Something went wrong.",
        icon: "error",
        text: "Please try again."
      })
    }
  }


  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.productName + item.purchasedOn} className="row">
            <div className="col-2">{item.productName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x &#8369;{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#8369;{totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            <hr />

            <div className="row">
              <button onClick={() => checkOut()}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}