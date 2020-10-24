import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const renderProducts = () => {
    if (products && !error) {
      return products.map((p) => (
        <ProductCard key={p._id} name={p.name} image={p.image} brandName={p.brand.name} brandImage={p.brand.imageUrl} />
      ));
    }

    return <div>No products</div>;
  };

  return <div className="home">{renderProducts()}</div>;
}

export default HomePage;
