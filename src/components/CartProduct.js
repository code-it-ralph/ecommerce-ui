import React from 'react';

export default function Product(props) {

  const { product, onAdd } = props;
  
  
  return (
    <div>
      <h3>{product.productName}</h3>
      <div>Php {product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}