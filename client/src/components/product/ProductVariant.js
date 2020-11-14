import React from 'react';

export default function ProductVariant(props) {
  const { image, name, price, unit, unitValue } = props;
  return (
    <div className="product-variant">
      <img src={image}></img>
      <div className="product-variant-name">{name}</div>
      <div className="product-variant-price">{price.toFixed(2)} kn</div>
    </div>
  );
}
