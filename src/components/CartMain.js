import React from 'react';
import CartProduct from './CartProduct';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h3>List of Liked Items</h3>
      <hr />
      <div className="row">
        {products.map((product) => (
          <CartProduct key={product.productName + product.purchasedOn} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

// import React, { Fragment } from 'react';
// import { Container } from 'react-bootstrap';
// import { useState, useEffect } from 'react';
// import CartProduct from './CartProduct';

// export default function CartMain() {

//   const token = localStorage.getItem('token');
//   const [products, setProducts] = useState([]);
//   const [orderedItems, setOrderedItems] = useState([]);


//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/ecommerce/users/my_orders`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setProducts(
//           data.orders.map(items => {
//             return (
//               <CartProduct key={items.productName + items.purchasedOn} orderedProp={items}/>
//             );
//           })
//         )
//       })
//   }, []);

//   return (
//     <Fragment>
//       {products}
//     </Fragment>
//   );
// }