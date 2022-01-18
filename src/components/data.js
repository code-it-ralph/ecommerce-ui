// import { useEffect } from "react";

// export default function GetUserOrders() {
//     // Get User's Token from localStorage
//     const localStorageToken = localStorage.getItem('token');

//     // product details
//     const userOrders = new Array;

//     // Get user's orders based on user token
    
//         fetch('https://murmuring-citadel-59250.herokuapp.com/ecommerce/users/my_orders', {
//             headers: {
//                 Authorization: `Bearer ${localStorageToken}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data)
//                 return (
//                     userOrders.push(data)
//                 )
//             }, []);
//         // end
    
    
    
//     const Data = userOrders;
//     return ({Data});
// }
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
