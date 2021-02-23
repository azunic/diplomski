import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputNumber } from 'antd';
import { Button, Accordion, Card, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

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
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <ListGroup.Item disabled>{profile && `${profile.username}`}</ListGroup.Item>
        </Form.Group>

        <Form.Group>
          <Form.Label>First name:</Form.Label>
          <ListGroup.Item disabled> {profile && `${profile.firstName}`}</ListGroup.Item>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <ListGroup.Item disabled> {profile && `${profile.lastName}`}</ListGroup.Item>
        </Form.Group>

        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <ListGroup.Item disabled> {profile && `${profile.email}`}</ListGroup.Item>
        </Form.Group>

        <Form.Group>
          <Form.Label> Broj proizvoda na wish listi</Form.Label>
          <ListGroup.Item disabled>{profile && `${profile.wishListedProducts.length}`}</ListGroup.Item>
          <Link>Idi na wishlistu</Link>
        </Form.Group>

        <Form.Group>
          <Form.Label>Moji proizvodi</Form.Label>
          <ListGroup.Item disabled> {profile && `${profile.ownedProducts.length}`}</ListGroup.Item>
          <Link>Idi na moje proizvode</Link>
        </Form.Group>

        <br></br>
      </div>
    </div>
  );
}
