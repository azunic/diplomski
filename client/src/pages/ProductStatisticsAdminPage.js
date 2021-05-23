import React, { useEffect } from 'react';
import StatisticsProductCard from '../components/product/StatisticsProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Button from 'react-bootstrap/Button';
function ProductStatisticsAdminPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  const deleteProduct = (productId) => {
    api.deleteProduct(productId);

    document.location.reload();
  };

  const renderProducts = () => {
    if (products && !error) {
      console.log(logme);
      if (brandId != undefined) {
        products = products.filter((product) => product.brand._id === brandId);
      }
      return products.map((p) => (
        <StatisticsProductCard
          key={p._id}
          productId={p._id}
          name={p.name}
          image={p.image}
          brandName={p.brand.name}
          brandImage={p.brand.imageUrl}
          noorders={p.soldtimes === undefined || p.soldtimes === null ? 0 : p.soldtimes}
        />
      ));
    }

    return <div>No products</div>;
  };

  return (
    <div className="security-details">
      <div className="security-details-head">
        <h2>Administrator </h2>
      </div>
      <div className="locker row">
        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allproducts')}>
            Svi proizvodi
          </Button>
        </div>

        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/createproduct')}>
            Dodaj proizvod
          </Button>
        </div>
        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allusers')}>
            Popis korisnika
          </Button>
        </div>

        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/notifications')}>
            Pošalji obavijest
          </Button>
        </div>
      </div>
      <div className="admin-products">{renderProducts()}</div>
    </div>
  );
}

export default ProductStatisticsAdminPage;
