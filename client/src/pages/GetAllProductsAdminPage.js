import React, { useEffect } from 'react';
import AdminProductCard from '../components/product/AdminProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';

function GetAllProductsAdminPage() {
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
        <AdminProductCard
          key={p._id}
          productId={p._id}
          name={p.name}
          image={p.image}
          brandName={p.brand.name}
          brandImage={p.brand.imageUrl}
          deleteProductCallback={deleteProduct}
        />
      ));
    }

    return <div>No products</div>;
  };

  return (
    <div className="home">
      <div>
        <h2>Administrator</h2>
        <button onClick={() => document.location.replace('/admin/allproducts')}>Pregledaj svoje proizvode</button>
        <button onClick={() => document.location.replace('/admin/createproduct')}>Dodaj novi proizvod</button>

        <button onClick={() => document.location.replace('/admin/allusers')}>Dohvati sve usere</button>

        <br></br>
      </div>
      {renderProducts()}
    </div>
  );
}

export default GetAllProductsAdminPage;
