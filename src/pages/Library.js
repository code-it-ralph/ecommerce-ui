import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';


export default function Book() {

    // State that will be used to store the products retrieve from the database
    const [products, setProducts] = useState([]);
    const allProducts = new Array;

    // Retrieve the product from the database upon initial render of the "Product" component
    useEffect(() => {
        fetch('https://murmuring-citadel-59250.herokuapp.com/ecommerce/products/')
        .then(res => res.json())
        .then(data => {

            // Sets the "products" state to map the data retrieved from the fetch request into several "ProductCard" components
            setProducts(
                data.map(product => {
                    return (
                        <ProductCard key={product._id} productProp={product}/>
                    );
                })
            )
        })
    }, []);

    return (
        <Fragment>
            {products}
        </Fragment>
    )
}