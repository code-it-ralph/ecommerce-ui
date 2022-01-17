import React from 'react';
import Product from './CartProduct';

export default function Main(props) {

  const { products, onAdd } = props;
  
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.productId} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}