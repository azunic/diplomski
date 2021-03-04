import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function ProductCard(props) {
  const { name, image, brandName, brandImage, productId, wishlistCallback, wishlisted } = props;
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
        <InfoCircleOutlined key="setting" onClick={() => document.location.replace(`/product-details/${productId}`)} />,
        <ShoppingCartOutlined key="edit" />,
        <HeartOutlined
          key="ellipsis"
          fill="#990000"
          style={wishlisted === true ? { color: '#990000' } : {}}
          onClick={() => wishlistCallback(productId)}
        />,
      ]}
    >
      <Meta
        avatar={<Avatar className="product-card-brand-image" src={brandImage} />}
        title={name}
        description={brandName}
      />
    </Card>
  );
}
