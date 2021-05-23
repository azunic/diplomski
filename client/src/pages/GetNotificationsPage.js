import React, { useEffect, useState } from 'react';
import AdminProductCard from '../components/product/AdminProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';
import * as api from '../api/api';
import Table from 'react-bootstrap/Table';

function GetNotificationsPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let user = useSelector((state) => state.webShop);
  const [notifications, setNotifications] = useState([]);
  let { brandId } = useParams();

  useEffect(() => {
    dispatch(actions.fetchProducts());
    var response = api.fetchNotifications();
    response.then(function (result) {
      setNotifications(result.data);
    });
  }, []);

  const renderNotifications = () => {
    if (!error && notifications) {
      console.log(logme);
      return notifications.map((notification) => (
        <tr>
          <td style={{ fontWeight: 'normal' }}>{notification.notificationType}</td>
          <td style={{ fontWeight: 'normal' }}>{notification.notificationTitle}</td>
        </tr>
      ));
    }

    return <div>No notifications</div>;
  };

  return (
    <div className="home">
      <Table striped bordered hover>
        <tr>
          <th>Notifikacija Tip:</th>
          <th>Notification Opis:</th>
        </tr>
        <tbody>{renderNotifications()}</tbody>
      </Table>
    </div>
  );
}

export default GetNotificationsPage;
