import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function BrandCard(props) {
  const { name, image, products, brandId } = props;
  console.log(props);
  return (
    <Link to={`/home/${brandId}`}>
      <Card
        hoverable
        className="brand-card"
        cover={<img alt="example" className="product-card-image" src={image} />}
      ></Card>
    </Link>
  );
}
