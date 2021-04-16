import React, { useEffect, useState } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import { Select, List, Input } from 'antd';
import { Card } from 'antd';

function EditProductAdminPage() {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.webShop.categories);
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

  const categoryChange = (e) => {
    console.log(e);
    setProduct({ ...product, productSubCategory: e.target.value });
    console.log(product);
    console.log(category);
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
              <Input type="text" id="ime" value={product.name} onChange={nameChange}></Input>
            </div>
            <div>
              <br></br>
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
              <br></br>
              <label>Category:</label>
              <select id="category" value={product.productSubCategory} onChange={categoryChange}>
                {user.categories.map((category) => (
                  <option key={category.value} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <br></br>
              <label>URL slike proizvoda:</label>
              <Input type="text" id="image" value={product.image} onChange={imageChange}></Input>
            </div>
            <div>
              <br></br>
              <label>Opis proizvoda:</label>
              <Input type="text" id="description" value={product.details} onChange={descriptionChange}></Input>
            </div>
            <div>
              <br></br>
              <label>Sastojci proizvoda:</label>
              <Input type="text" id="details" value={product.ingredients} onChange={ingredientsChange}></Input>
            </div>
            <div>
              <br></br>
              <label>Cijena proizvoda:</label>
              <Input type="text" id="details" value={product.price} onChange={priceChange}></Input>
            </div>
            <br></br>
            <div>
              <Button variant="outline-success" onClick={createProduct}>
                Potvrdi
              </Button>
            </div>
          </div>
        );
      }
    } else {
      return <div>Please wait</div>;
    }
  };

  return (
    <div>
      <div className="security-details">
        <div className="security-details-head">
          <h2>Prodajni štand </h2>
        </div>
        <div className="locker row">
          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allproducts')}>
              Pregledaj sve proizvode
            </Button>
          </div>

          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/createproduct')}>
              Dodaj novi proizvod
            </Button>
          </div>
          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allusers')}>
              Pregledaj sve korisnike
            </Button>
          </div>
        </div>

        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="page">
        <Container>{renderCreateForm()}</Container>
      </div>
    </div>
  );
}

export default EditProductAdminPage;
