import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function CreateProductPage() {
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
            <input type="text" id="ime" onChange={nameChange}></input>
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
            <input type="text" id="image" onChange={imageChange}></input>
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
            <input type="text" id="price" onChange={priceChange}></input>
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
          <h2>Prodajni štand </h2>
        </div>
        <div className="locker">
          <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/all')}>
            Pregledaj sve proizvode na trznici
          </Button>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/locker/addproduct')}>
            Dodaj novi proizvod
          </Button>
        </div>

        <br></br>
      </div>
      <div className="home">{renderCreateForm()}</div>
    </div>
  );
}

export default CreateProductPage;
