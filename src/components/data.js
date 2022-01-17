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
        productName: 'MacBook',
        price: 1400,
        image: 'https://picsum.photos/id/180/2400/1600',
      },
      {
        productId: '2',
        productName: 'Old Car',
        price: 2400,
        image: 'https://picsum.photos/id/111/4400/2656',
      },
      {
        productId: '3',
        productName: 'W Shoes',
        price: 1000,
        image: 'https://picsum.photos/id/21/3008/2008',
      }
    ]
  };
  export default data;
