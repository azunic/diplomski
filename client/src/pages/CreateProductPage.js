import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Input } from 'antd';
import { Select, List } from 'antd';
import { Card } from 'antd';

function CreateProductPage() {
  const { Option } = Select;
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  var name = '';
  var image = '';
  var price = '';
  var brand = '';
  var category = '';
  var description = '';
  var indigredients = '';

  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchBrands());
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());
    console.log(user);
  }, []);

  const createProduct = () => {
    checkFields();
    console.log(checkFields());
    var productVariant = products[0].productVariant;
    console.log(productVariant);
    var email = user.userProfileData.email;
    const newProduct = {
      name,
      image,
      category,
      brand,
      productVariant,
      email,
      price,
    };
    console.log(newProduct);
    var data;
    var response = api.addProduct(newProduct);
    response.then(function (result) {
      data = result.data;
      console.log(data);
      user.userProfileData.ownedProducts.push(data);
      console.log(user.userProfileData.ownedProducts);
      api.updateUser(user.userProfileData);

      window.location.replace('/locker');
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const nameChange = (e) => {
    console.log(e);
    name = e.target.value;
    console.log(name);
  };

  const imageChange = (e) => {
    console.log(e);
    image = e.target.value;
    console.log(image);
  };

  const priceChange = (e) => {
    console.log(e);
    price = e.target.value;
    console.log(price);
  };

  function brandChange(e, value) {
    console.log(e);
    brand = e.target.value;
    console.log(`selected ${value}`);
    console.log(brand);
  }

  const categoryChange = (e) => {
    console.log(e);
    category = e.target.value;
    console.log(category);
  };

  const renderCreateForm = () => {
    console.log(user);
    if (user.brands && user.categories) {
      return (
        <div className="product-detail-footer-card">
          <div className="product-detail-footer-card">
            <label className="product-detail-footer-h5">Ime proizvoda:</label>
            <Input type="text" id="ime" onChange={nameChange}></Input>
          </div>
          <div>
            <label className="product-detail-footer-h5">Brend:</label>
            <Input type="text" id="brend" onChange={brandChange}></Input>
          </div>
          <div>
            <label className="product-detail-footer-h5">URL slike proizvoda:</label>
            <Input type="text" id="image" onChange={imageChange}></Input>
          </div>
          <div>
            <label className="product-detail-footer-h5">Odaberi kategoriju proizvoda:</label>

            <Input type="text" id="category" onChange={categoryChange}></Input>
          </div>
          <div>
            <label className="product-detail-footer-h5">Cijena proizvoda:</label>
            <Input type="text" id="price" onChange={priceChange}></Input>
          </div>
          <br></br>
          <div className="product-detail-footer-h5">
            <Button variant="outline-success" onClick={createProduct}>
              Potvrdi
            </Button>
          </div>
        </div>
      );
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
            <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/all')}>
              Pregledaj sve proizvode
            </Button>
          </div>
          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/addproduct')}>
              Dodaj novi proizvod
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

export default CreateProductPage;
