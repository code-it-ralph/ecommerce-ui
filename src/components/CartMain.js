import React from 'react';
import Product from './CartProduct';

export default function Main(props) {

  const { products, onAdd } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {
          // products.map((product) => (
            <Product key={products.productId} product={products} onAdd={onAdd}/>
          // ))
        }
      </div>
    </main>
  );
}