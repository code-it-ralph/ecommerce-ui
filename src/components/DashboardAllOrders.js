import { Fragment, useEffect, useState } from 'react';
import DashboardAllOrdersCard from './DashboardAllOrdersCard';
import { Link } from 'react-router-dom';



export default function GetAllOrders() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL }/ecommerce/users/orders`, {
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


