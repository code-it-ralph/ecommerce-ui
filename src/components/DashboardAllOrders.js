import { Fragment, useEffect, useState } from 'react';
import DashboardAllOrdersCard from './DashboardAllOrdersCard';



export default function GetAllOrders() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://quiet-stream-93181.herokuapp.com/ecommerce/users/orders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                    
                setProducts(
                    data.map(product => {
                            return (
                                <DashboardAllOrdersCard key={product._id} productProp={product} />
                            );
                        })
                    
                )
            })
    }, []);


    return (
        <Fragment>
            {products}
        </Fragment>
    );
}


