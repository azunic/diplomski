import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function WishlistProductCard(props) {
  const { name, image, brandName, brandImage, productId, wishlistCallback } = props;
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
        <ShoppingCartOutlined key="edit" />,
        <HeartOutlined key="ellipsis" style={{ color: '#990000' }} onClick={() => wishlistCallback(productId)} />,
      ]}
    >
      <Meta title={name} />
    </Card>
  );
}
