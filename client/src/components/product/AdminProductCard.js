import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function AdminProductCard(props) {
  const { name, image, brandName, brandImage, productId, deleteProductCallback } = props;
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
        <button class="btn btn-primary" onClick={() => window.location.replace(`/admin/editproduct/${productId}`)}>
          Uredi
        </button>,
        <button class="btn btn-danger" onClick={() => deleteProductCallback(productId)}>
          X
        </button>,
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
