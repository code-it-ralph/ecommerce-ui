// import { useState, useEffect, Fragment } from 'react';
// import CartApp from './CartApp';

// export default function CartData() {

//     const token = localStorage.getItem('token');
//     const [orderData, setOrderData] = useState([]);

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}/ecommerce/users/my_orders`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {

//                 setOrderData(
//                     data.map(product => {
                        
//                         return (
//                             <CartApp key={product._id} productProp={product}/>
//                         );
//                     })
//                 )
//             })
//     }, []);
// };


const data = {
    products: [
      {
        productId: '1',
        productName: 'The Mind Connection',
        price: 1400
      },
      {
        productId: '2',
        productName: 'Atomic Habits',
        price: 2400
      },
      {
        productId: '3',
        productName: 'The Happiness Hypothesis',
        price: 1000
      },
      {
        productId: '4',
        productName: 'The Alchemist',
        price: 1000
      }
    ]
  };
  export default data;
