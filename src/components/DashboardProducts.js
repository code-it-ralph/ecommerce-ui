import { Fragment, useEffect, useState } from 'react';
import DashboardProductCard from './DashboardProductCard';


export default function DashboardProducts() {

    // State that will be used to store the products retrieve from the database
    const [products, setProducts] = useState([]);
    const allProducts = new Array;



    // Retrieve the product from the database upon initial render of the "Product" component
    const fetchData = () => {
        
        fetch(`${process.env.REACT_APP_API_URL}/ecommerce/products/all`)
            .then(res => res.json())
            .then(data => {

                // Sets the "products" state to map the data retrieved from the fetch request into several "ProductCard" components
                setProducts(
                    data.map(product => {
                        return (
                            <DashboardProductCard key={product._id} productProp={product} fetchData={fetchData} />
                        );
                    })
                )
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Fragment>
            {products}
        </Fragment>
    )
}