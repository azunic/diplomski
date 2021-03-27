import React, { useEffect, useState } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Button from 'react-bootstrap/Button';
function LockerAllProductsPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  const [users, setUsers] = useState([]);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
    var response = api.fetchUsers();
    response.then(function (result) {
      setUsers(result.data);
      console.log(users);
      var prodshow = [];
      users.forEach((user) => user.ownedProducts.forEach((product) => prodshow.push(product)));
    });
  }, []);

  const renderProducts = () => {
    if (products && !error && user.userProfileData) {
      var prodshow = [];
      users.forEach((user) => user.ownedProducts.forEach((product) => prodshow.push(product)));
      var productss = products.filter((product) => prodshow.includes(product._id));
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }
      return (
        user &&
        productss.map((p) => (
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

    return <div>No products </div>;
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

export default LockerAllProductsPage;
