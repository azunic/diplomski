import React, { useEffect, useState } from 'react';
import AdminProductCard from '../components/product/AdminProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
        <tr>
          <td style={{ fontWeight: 'normal' }}>{user.email}</td>
          <td style={{ fontWeight: 'normal' }}>{user.username}</td>
          <td style={{ fontWeight: 'normal' }}>{user.firstName}</td>
          <td style={{ fontWeight: 'normal' }}>{user.lastName}</td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
              Izbrisi korisnika
            </button>
          </td>
        </tr>
      ));
      /*
      return users.map((user) => (
        <div>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                    Izbrisi korisnika
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ));*/
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
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/statistics')}>
            Statistika proizvoda
          </Button>
        </div>
        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/notifications')}>
            Unesi Obavijest
          </Button>
        </div>
        <div className="col" style={{ position: 'static' }}>
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/allproducts')}>
            Svi proizvodi
          </Button>
        </div>
      </div>
      <div className="admin-table">
        {' '}
        <Table striped bordered hover>
          <tr>
            <th>E-mail</th>
            <th>Username</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Akcija</th>
          </tr>
          <tbody>{renderUsers()}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default GetAllUsersAdminPage;
