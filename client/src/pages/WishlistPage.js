import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';

function WishlistPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const onWishlistClick = (productId) => {
    //console.log(user && `${user.username}`)
    let lista = user.userProfileData.wishListedProducts;

    console.log(lista.length);

    let product = products.find((product) => product._id === productId);
    console.log(product);

    const index = lista.indexOf(productId);
    if (index > -1) {
      user.userProfileData.wishListedProducts.splice(index, 1);
    }
    console.log(lista.length);
    document.location.reload();
    api.updateUser(user.userProfileData);
  };

  const renderProducts = () => {
    if (products && !error && user.userProfileData) {
      let wishlist = products.filter((product) => user.userProfileData.wishListedProducts.includes(product._id));
      console.log(logme);
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }
      return (
        user &&
        wishlist.map((p) => (
          <WishlistProductCard
            key={p._id}
            productId={p._id}
            name={p.name}
            image={p.image}
            wishlistCallback={onWishlistClick}
          />
        ))
      );
    }

    return <div>No products</div>;
  };

  return (
    <div className="home">
      <div className="profile-form-head">
        <h2>Wishlist</h2>
      </div>
      {renderProducts()}
    </div>
  );
}

export default WishlistPage;
