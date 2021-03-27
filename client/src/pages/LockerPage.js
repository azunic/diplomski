import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';

function LockerPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const renderProducts = () => {
    if (products && !error && user.userProfileData) {
      let myProducts = products.filter((product) => user.userProfileData.ownedProducts.includes(product._id));

      console.log(logme);
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }
      return (
        user &&
        myProducts.map((p) => (
          <WishlistProductCard
            key={p._id}
            productId={p._id}
            name={p.name}
            image={p.image}
            wishlistCallback={() => console.log('hi')}
          />
        ))
      );
    }

    return <div>No products</div>;
  };

  return (
    <div className="security-details">
      <div className="security-details-head">
        <h2>Moj prodajni štand </h2>
      </div>
      <div className="locker row">
        <div className="col">
          <Button variant="outline-secondary" onClick={() => document.location.replace('/locker')}>
            Pregledaj svoje proizvode
          </Button>
        </div>
        <div class="col">
          <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/all')}>
            Pregledaj sve proizvode
          </Button>
        </div>
        <div className="col">
          <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/addproduct')}>
            Dodaj novi proizvod
          </Button>
        </div>
      </div>
      <div className="locker-products">{renderProducts()}</div>
    </div>
  );
}

export default LockerPage;
