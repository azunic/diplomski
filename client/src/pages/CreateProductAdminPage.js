import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import { Input } from 'antd';
import { Select, List } from 'antd';
import { Card } from 'antd';

function CreateProductAdminPage() {
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
  var details = '';

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
    const newProduct = {
      name,
      image,
      category,
      brand,
      productVariant,
      details,
      price,
    };
    console.log(newProduct);
    var data;
    var response = api.addProduct(newProduct);
    response.then(function (result) {
      data = result.data;
      console.log(data);
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

  const descriptionChange = (e) => {
    console.log(e);
    details = e.target.value;
    console.log(price);
  };

  const brandChange = (e) => {
    console.log(e);
    brand = e.target.value;
    console.log(brand);
  };

  const categoryChange = (e) => {
    console.log(e);
    category = e.target.value;
    console.log(category);
  };

  const renderCreateForm = () => {
    console.log(user);
    if (user.brands && user.categories) {
      return (
        <div>
          <div>
            <label>Ime proizvoda:</label>
            <Input type="text" id="ime" onChange={nameChange}></Input>
          </div>
          <div>
            <label>Brend:</label>
            <select id="brend" onChange={brandChange}>
              {user.brands.map((brand) => (
                <option key={brand.value} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>URL slike proizvoda:</label>
            <Input type="text" id="image" onChange={imageChange}></Input>
          </div>
          <div>
            <label>Odaberi kategoriju proizvoda:</label>
            <select id="category" onChange={categoryChange}>
              {user.categories.map((category) => (
                <option key={category.value} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Cijena proizvoda:</label>
            <Input type="text" id="price" onChange={priceChange}></Input>
          </div>
          <div>
            <label>Opis proizvoda:</label>
            <Input type="text" id="details" onChange={descriptionChange}></Input>
          </div>
          <div>
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
          <h2>Administrator</h2>
        </div>
        <div className="locker row">
          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/createproduct')}>
              Dodaj novi proizvod
            </Button>
          </div>
          <div className="col" style={{ position: 'static' }}>
            <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allusers')}>
              Dohvati sve korisnike
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

export default CreateProductAdminPage;
