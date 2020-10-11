import React from 'react';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;
export default function ProductCard(props) {
  const { name, image, brandName, brandImage } = props;
  return (
    <Card
      hoverable
      className="product-card"
      cover={<img alt="example" className="product-card-image" src={image} />}
      actions={[
        <InfoCircleOutlined key="setting" />,
        <ShoppingCartOutlined key="edit" />,
        <HeartOutlined key="ellipsis" />,
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
