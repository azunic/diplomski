import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
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
    <div className="home">
      <div>
        <h2>Prodajni stand</h2>
        <button onClick={() => document.location.replace('/locker')}>Pregledaj svoje proizvode</button>
        <button onClick={() => document.location.replace('/locker/addproduct')}>Dodaj novi proizvod</button>
        <br></br>
      </div>
      {renderProducts()}
    </div>
  );
}

export default LockerPage;
