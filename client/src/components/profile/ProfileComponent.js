import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, InputNumber } from 'antd';
import { Button, Accordion, Card } from 'react-bootstrap';
export default function ProfileComponent(props) {
  console.log(props);
  console.log(props.props);
  let profile = props.props;
  console.log(profile);

  const loadDataOnlyOnce = () => {
    let profile = props.props;
    console.log(profile);
    console.log(profile);
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <div>
      <div className="security-details">
        <div className="security-details-head">
          <h2>Moj profil</h2>
        </div>
        <Form>
          <Card>
            <span>Username:</span>
            {profile && `${profile.username}`}
            <br></br>
          </Card>
          <Card>
            <span>First name:</span>
            {profile && `${profile.firstName}`}
            <br></br>
          </Card>
          <Card>
            <span>Last name:</span>
            {profile && `${profile.firstName}`}
            <br></br>
          </Card>
          <Card>
            <span>E-Mail:</span>
            {profile && `${profile.email}`}
            <br></br>
          </Card>
          <Card>
            <span>Broj proizvoda na wishlist:</span>
            {profile && `${profile.wishListedProducts.length}`}
            <Link>Idi na wishlistu</Link>
            <br></br>
          </Card>
          <Card>
            <span>Moji proizvodi:</span>
            {profile && `${profile.ownedProducts.length}`}
            <Link>Idi na moje proizvode</Link>
            <br></br>
          </Card>
        </Form>
      </div>
    </div>
  );
}
