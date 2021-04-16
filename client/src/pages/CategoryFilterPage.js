import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';

function CategoryFilterPage() {
  const dispatch = useDispatch();
  let { categoryId } = useParams();
  let products = useSelector((state) => state.webShop.products);
  let categories = useSelector((state) => state.webShop.categories);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);

  let log = useSelector((state) => state);

  useEffect(() => {
    console.log('hereeee');
    dispatch(actions.fetchCategories());
  }, []);

  useEffect(() => {
    console.log('hereeee');
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

  const renderProducts = () => {
    console.log(logme);
    if (products && !error && user.userProfileData.wishListedProducts) {
      console.log(logme);
      console.log(categoryId);
      if (categoryId != undefined) {
        console.log(categoryId);
        console.log(categories);
        console.log(products);
        products = products.filter((product) => product.productSubCategory === categoryId);

        return products.map((p) => (
          <ProductCard
            key={p._id}
            productId={p._id}
            name={p.name}
            image={p.image}
            brandName={p.brand.name}
            brandImage={p.brand.imageUrl}
            wishlisted={isWishlisted(p)}
            wishlistCallback={onWishlistClick}
          />
        ));
      }
    }

    return <div>No products</div>;
  };

  return (
    <div className="home">{categories === null || user.userProfileData === null ? 'Loading' : renderProducts()}</div>
  );
}

export default CategoryFilterPage;
