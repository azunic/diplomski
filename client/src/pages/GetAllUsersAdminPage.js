import React, { useEffect, useState } from 'react';
import AdminProductCard from '../components/product/AdminProductCard';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Button from 'react-bootstrap/Button';

function GetAllUsersAdminPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  const [users, setUsers] = useState([]);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
    var response = api.fetchUsers();
    response.then(function (result) {
      setUsers(result.data);
    });
  }, []);

  const deleteUser = (userId) => {
    api.deleteUser(userId);

    document.location.reload();
  };

  const renderUsers = () => {
    if (!error && users) {
      console.log(logme);
      return users.map((user) => (
        <div>
          <label>Mail:</label>
          <label>{user.email}</label>
          <br></br>
          <label>Username: </label>
          <label>{user.username}</label>
          <br></br>
          <label>Ime: </label>
          <label>{user.firstName}</label>
          <br></br>
          <label>Prezime: </label>
          <label>{user.lastName}</label>
          <br></br>
          <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
            Izbrisi korisnika
          </button>
        </div>
      ));
    }

    return <div>No users</div>;
  };

  return (
    <div className="security-details">
      <div className="security-details-head">
        <h2>Administrator</h2>
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
      </div>
      <div className="admin-products">{renderUsers()}</div>
    </div>
  );
}

export default GetAllUsersAdminPage;
