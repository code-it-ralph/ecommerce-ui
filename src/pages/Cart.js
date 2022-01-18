/* React */
import { useState, useEffect, useContext, Fragment } from 'react';

/* Components */
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
        fetch('https://quiet-stream-93181.herokuapp.com/ecommerce/users/my_orders', {
            headers: {
                Authorization: `Bearer ${localStorageToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // localStorage.setItem('anokaba', JSON.stringify(data));
                // console.log([data])
                setUserOrders(data)
            })
        // end
    }, [userOrders]);
    // console.log(userOrders)
    
    
    
    

    // Code Block for Cart
    const { orders } = userOrders;
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