import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import OrderProductCard from '../components/product/OrderProductCard';
import { Card, Avatar } from 'antd';

const image_payment = require('./../assets/payment.jpg');

const { Meta } = Card;
function OrderPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);

  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const calculateTotal = () => {
    if (products && !error && user.userProfileData) {
      var total = 0;
      var myproducts = [];
      user.userProfileData.orderedProducts.forEach((product) =>
        products.filter((np) => (np._id === product ? myproducts.push(np) : myproducts)),
      );
      console.log();
      myproducts.forEach((product) => (total = total + parseInt(product.price)));
      console.log(total);
      console.log(products[11]);
      console.log(products[4]);
      return total.toString();
    }
  };

  const onDeleteClick = (productId) => {
    let product = products.find((product) => product._id === productId);
    console.log(product);

    const index = user.userProfileData.orderedProducts.indexOf(productId);
    if (index > -1) {
      user.userProfileData.orderedProducts.splice(index, 1);
    }

    api.updateUser(user.userProfileData);
    document.location.reload();
  };

  const doCheckout = () => {
    user.userProfileData.orderedProducts = [];
    api.updateUser(user.userProfileData);
    document.location.replace('/home');
  };

  const renderProducts = () => {
    if (products && !error && user.userProfileData) {
      var myproducts = [];
      user.userProfileData.orderedProducts.forEach((product) =>
        products.filter((np) => (np._id === product ? myproducts.push(np) : myproducts)),
      );
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }

      if (myproducts.length !== 0) {
        return myproducts.map((p, i) => (
          <OrderProductCard
            key={i}
            productId={p._id}
            name={p.name}
            image={p.image}
            brandName={p.brand.name}
            brandImage={p.brand.imageUrl}
            price={p.price}
            removeFromCartCallback={onDeleteClick}
          />
        ));
      }
    }

    return <div>No products</div>;
  };
  return (
    <div className="order-details">
      <div className="order-details-head">
        <h2>Košarica</h2>
      </div>
      <div className="order-details-body">
        <Card title="Plaćanje" style={{ width: 1000 }}>
          <div className="polovica">
            <label className="order-details-label">Total to pay: {user.userProfileData ? calculateTotal() : '5'}</label>
          </div>

          <div className="polovica-desno">
            <img className=" order-photo-image" style={{ float: 'right' }} src={image_payment} />
          </div>

          <div className="polovica">
            <Button variant="outline-success" style={{ marginTop: '130px' }} onClick={() => doCheckout()}>
              Kupi
            </Button>
          </div>
        </Card>
      </div>
      {renderProducts()}
    </div>
  );
}

export default OrderPage;
