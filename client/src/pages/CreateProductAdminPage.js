import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import { ButtonGroup } from 'react-bootstrap';

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
            <label>Opis proizvoda:</label>
            <input type="text" id="details" onChange={descriptionChange}></input>
          </div>
          <div>
            <button onClick={createProduct}>Potvrdi</button>
          </div>
        </div>
      );
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

        <button onClick={() => document.location.replace('/admin/allusers')}>Dohvati sve usere</button>

        <br></br>
      </div>
      {renderCreateForm()}
    </div>
  );
}

export default CreateProductAdminPage;
