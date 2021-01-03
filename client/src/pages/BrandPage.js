import React, { useEffect } from 'react';
import BrandCard from '../components/brand/BrandCard';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

function BrandsPage() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.webShop.brands);
  const error = useSelector((state) => state.webShop.errorFetchBrands);

  useEffect(() => {
    dispatch(actions.fetchBrands());
  }, []);

  const renderBrands = () => {
    if (brands && !error) {
      return brands.map((b) => (
        <BrandCard key={b._id} name={b.name} image={b.imageUrl} brandId={b._id} products={b.products} />
      ));
    }

    return <div>No brands</div>;
  };

  return <div className="home">{renderBrands()}</div>;
}

export default BrandsPage;
