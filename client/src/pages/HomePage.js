import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';

function HomePage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const renderProducts = () => {
    if (products && !error) {
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
          brandImage={p.brand.imageUrl}
        />
      ));
    }

    return <div>No products</div>;
  };

  return <div className="home">{renderProducts()}</div>;
}

export default HomePage;
