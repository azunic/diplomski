import React, { useEffect } from 'react';
import WishlistProductCard from '../components/product/WishlistProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Button from 'react-bootstrap/Button';
import { List, Input } from 'antd';
function SendNotificationAdminPage() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.webShop);
  var notificationTitle = '';
  var notificationType = 'PRODUCT_BUY_REQUEST';

  useEffect(() => {
    dispatch(actions.fetchBrands());
    dispatch(actions.fetchProducts());
    dispatch(actions.fetchCategories());
    console.log(user);
  }, []);

  const sendNotification = () => {
    const newNotification = {
      notificationTitle,
      notificationType,
    };

    api.createNotification(newNotification);

    window.location.reload();
  };

  const notificationTypeChange = (e) => {
    console.log(e);
    notificationType = e.target.value;
    console.log(notificationType);
  };

  const notificationTitleChange = (e) => {
    console.log(e);
    notificationTitle = e.target.value;
    console.log(notificationTitle);
  };

  const renderCreateForm = () => {
    console.log(user);
    if (user.brands && user.categories) {
      return (
        <div style={{ margin: '0 auto', backgroundColor: 'white' }}>
          <div className="col">
            <p>Odaberi vrstu notifikacije:</p>
            <select id="notificationType" onChange={notificationTypeChange}>
              <option value="PRODUCT_BUY_REQUEST">Product Buy Request</option>
              <option value="WISHLISTED_PRODUCT_ON_SALE">Wishlisted Product On Sale</option>
            </select>
          </div>

          <div className="col">
            <p>Opis notifikacije:</p>

            <Input type="text" id="notificationTitle" onChange={notificationTitleChange}></Input>
          </div>

          <div className="col" style={{ marginTop: '15px' }}>
            <button style={{ width: '100%' }} className="btn btn-primary " onClick={sendNotification}>
              Posalji notifikaciju
            </button>
          </div>
        </div>
      );
    } else {
      return <div>Please wait</div>;
    }
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
          <Button variant="outline-secondary" onClick={() => document.location.replace('/admin/statistics')}>
            Statistika proizvoda
          </Button>
        </div>
      </div>
      <div className="admin-products">{renderCreateForm()}</div>
    </div>
  );
}

export default SendNotificationAdminPage;
