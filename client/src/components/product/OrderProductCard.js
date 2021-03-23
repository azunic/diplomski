import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function OrderProductCard(props) {
  const { name, image, brandName, brandImage, productId, removeFromCartCallback, price } = props;
  return (
    <Card
      hoverable
      className="product-card"
      cover={
        <img
          alt="example"
          className="product-card-image"
          src={image}
          onClick={() => document.location.replace(`/product-details/${productId}`)}
        />
      }
      actions={[
        <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCartCallback(productId)}>
          Izbriši iz košarice
        </button>,
      ]}
    >
      <Meta
        avatar={<Avatar className="product-card-brand-image" src={brandImage} />}
        title={name}
        description={brandName}
        price={price + 'kn'}
      />
    </Card>
  );
}
