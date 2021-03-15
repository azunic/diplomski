import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';

function HomePage() {
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
    if (isWishlisted(product) === true) {
      const index = lista.indexOf(productId);
      if (index > -1) {
        user.userProfileData.wishListedProducts.splice(index, 1);
      }
    } else {
      lista.push(product);
    }

    console.log(lista.length);
    api.updateUser(user.userProfileData);
    window.location.reload();
  };

  const isWishlisted = (product) => {
    console.log(user.userProfileData.wishListedProducts.includes(product._id));
    console.log(user.userProfileData.wishListedProducts);
    console.log(product);
    return user.userProfileData.wishListedProducts.includes(product._id);
  };
  const addToShoppingCart = (productId) => {
    //console.log(user && `${user.username}`)
    let lista = user.userProfileData.orderedProducts;

    console.log(lista.length);

    let product = products.find((product) => product._id === productId);

    user.userProfileData.orderedProducts.push(product);

    console.log(lista.length);
    var response = api.updateUser(user.userProfileData);
    response.then(function (result) {
      console.log(result);
      console.log(user.userProfileData.orderedProducts);
      console.log('tu tutut ');
      window.location.reload();
    });
  };
  const renderProducts = () => {
    if (products && !error && user.userProfileData) {
      console.log(logme);
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }
      return products.map((p) => (
        <ProductCard
          key={p._id}
          productId={p._id}
          name={p.name}
          image={p.image}
          brandName={p.brand.name}
          wishlisted={isWishlisted(p)}
          brandImage={p.brand.imageUrl}
          wishlistCallback={onWishlistClick}
          addToCartCallback={addToShoppingCart}
        />
      ));
    }

    return <div>No products</div>;
  };

  return <div className="home">{renderProducts()}</div>;
}

export default HomePage;
