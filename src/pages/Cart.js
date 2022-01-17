/* React */
import { useState, useEffect, useContext, Fragment } from 'react';

/* Components */
import OrderDetails from '../components/OrderDetails';
import Header from '../components/CartHeader';
import Main from '../components/CartMain';
import Basket from '../components/CartBasket';
import data from '../components/data'

export default function Cart() {

    // Get User's Token from localStorage
    const localStorageToken = localStorage.getItem('token');

    // product details
    const [userOrders, setUserOrders] = useState([]);

    // Get user's orders based on user token
    useEffect(() => {
        fetch('http://localhost:4001/ecommerce/users/my_orders', {
            headers: {
                Authorization: `Bearer ${localStorageToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // localStorage.setItem('anokaba', JSON.stringify(data));
                // console.log(data)
                
                    setUserOrders(data)
                
            }, []);
        // end
    });
    // console.log(userOrders)
    // console.log(localStorage.getItem('anokaba'))
    
    
    

    // Code Block for Cart
    const { orders } = userOrders;
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
            <div className="App">
                <Header countCartItems={cartItems.length}></Header>
                <div className="row">
                    <Main products={orders} onAdd={onAdd}></Main>
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