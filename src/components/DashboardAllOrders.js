
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useHistory, Link } from 'react-router-dom';
// to consume a user details upon hitting enroll button
// to share values from your components to other components
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import { Fragment, useEffect, useState } from 'react';
import DashboardAllOrdersCard from './DashboardAllOrdersCard';



export default function GetAllOrders() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://peaceful-peak-58446.herokuapp.com/ecommerce/users/orders`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setProducts(
                    data.map(product => {
                        console.log(product.orders)
                            return (
                                <DashboardAllOrdersCard key={product._id} productProp={[product]} />
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


