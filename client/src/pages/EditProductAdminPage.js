import React, { useEffect, useState } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup } from 'react-bootstrap';

function EditProductAdminPage() {
  const dispatch = useDispatch();
  let { productId } = useParams();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  const [product, setProduct] = useState({ name: '', image: '', brand: '', details: '', ingredients: '', price: '' });
  var name = '';
  var image = '';
  var price = '';
  var brand = '';
  var category = '';
  var details = '';
  var ingredients = '';

  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchBrands());
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());
  }, []);

  const createProduct = () => {
    checkFields();
    console.log(checkFields());
    var productVariant = products[0].productVariant;
    console.log(product);
    var data;
    var response = api.updateProduct(product);
    response.then(function (result) {
      data = result.data;
      console.log(data);
      console.log('tu tutut ');
      window.location.replace('/admin/allproducts');
    });
  };

  const checkFields = () => {
    console.log(name);
    if (name === undefined) {
      return false;
    } else {
      return true;
    }
  };

  const nameChange = (e) => {
    console.log(e);
    setProduct({ ...product, name: e.target.value });
    console.log(name);
  };

  const imageChange = (e) => {
    console.log(e);
    setProduct({ ...product, image: e.target.value });
    console.log(image);
  };

  const ingredientsChange = (e) => {
    console.log(e);
    setProduct({ ...product, ingredients: e.target.value });
    console.log(price);
  };

  const descriptionChange = (e) => {
    console.log(e);
    setProduct({ ...product, details: e.target.value });
    console.log(price);
  };

  const brandChange = (e) => {
    console.log(e);
    setProduct({ ...product, brand: e.target.value });
    console.log(brand);
  };

  const priceChange = (e) => {
    console.log(e);
    setProduct({ ...product, price: e.target.value });
    console.log(price);
  };

  const renderCreateForm = () => {
    console.log(product);

    if (user.brands && products && user.categories) {
      if (product.name === '') {
        var newProduct = products.find((thisProd) => thisProd._id === productId);
        setProduct(newProduct);
        console.log('tuuu');
      }

      if (products) {
        return (
          <div>
            <div>
              <label>Ime proizvoda:</label>
              <input type="text" id="ime" value={product.name} onChange={nameChange}></input>
            </div>
            <div>
              <label>Brend:</label>
              <select id="brend" value={product.brand} onChange={brandChange}>
                {user.brands.map((brand) => (
                  <option key={brand.value} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>URL slike proizvoda:</label>
              <input type="text" id="image" value={product.image} onChange={imageChange}></input>
            </div>

            <div>
              <label>Opis proizvoda:</label>
              <input type="text" id="description" value={product.details} onChange={descriptionChange}></input>
            </div>

            <div>
              <label>Sastojci proizvoda:</label>
              <input type="text" id="details" value={product.ingredients} onChange={ingredientsChange}></input>
            </div>

            <div>
              <label>Cijena proizvoda:</label>
              <input type="text" id="details" value={product.price} onChange={priceChange}></input>
            </div>
            <div>
              <button onClick={createProduct}>Potvrdi</button>
            </div>
          </div>
        );
      }
    } else {
      return <div>Please wait</div>;
    }
  };

  return (
    <div className="home">
      <div>
        <h2>Administrator</h2>
        <button onClick={() => document.location.replace('/admin/allproducts')}>Pregledaj svoje proizvode</button>
        <button onClick={() => document.location.replace('/admin/createproduct')}>Dodaj novi proizvod</button>

        <button onClick={() => document.location.replace('/user/allusers')}>Dohvati sve usere</button>

        <br></br>
      </div>
      {renderCreateForm()}
    </div>
  );
}

export default EditProductAdminPage;
