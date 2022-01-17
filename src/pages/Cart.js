/* React */
import { useState, useEffect, useContext, Fragment } from 'react';

/* Components */
import OrderDetails from '../components/OrderDetails';
import Header from '../components/CartHeader';
import Main from '../components/CartMain';
import Basket from '../components/CartBasket';
import data from '../data';

export default function Cart() {

    const [userOrders, setUserOrders] = useState([]);

    // Get User's Token from localStorage
    const localStorageToken = localStorage.getItem('token');

    // product details
    const userOrderDetails = new Array;


    // Get user's orders based on user token
    useEffect(() => {
        fetch('https://peaceful-peak-58446.herokuapp.com/ecommerce/users/my_orders', {
            headers: {
                Authorization: `Bearer ${localStorageToken}`
            }
        })
            .then(res => res.json())
            .then(data => {

            
                data.map(items => {
                    return (
                        // console.log(items.productId)
                            // userOrderDetails.push(JSON.stringify(items))
                    localStorage.setItem('retievedOrders', JSON.stringify(items))
                    // localStorage.setItem('bookOrders', items)
                    //     < OrderDetails key = { items._id } orderProp = { items } />
                        )
                    
            });
                    
        // localStorage.setItem('retrievedOrders', userOrderDetails)
        // // const retrievedObject = localStorage.getItem('retrievedOrders');
        // console.log('items: ', userOrderDetails)



        // setUserOrders(
        //     data.map(items => {
        //         return (
        //             console.log(items)
        //             // <OrderDetails key={items._id} orderProp={items} />
        //         )
        //     })
        // );

    }, []);
    // end

});

function OrderDetails({ orderProp }) {

    const { productName, quantity, price } = orderProp;
}

// Code Block for Cart
const { products } = data;
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist) {
        setCartItems(
            cartItems.map((x) =>
                x.productId === product.productId ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
    } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
};
const onRemove = (product) => {
    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.productId !== product.productId));
    } else {
        setCartItems(
            cartItems.map((x) =>
                x.productId === product.productId ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
    }
};


return (
    <Fragment>
        {/* {userOrders} */}
        <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <Main products={products} onAdd={onAdd}></Main>
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></Basket>
            </div>
        </div>
    </Fragment>
);
};