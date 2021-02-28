import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputNumber } from 'antd';
import { Button, Accordion, Card, Form, Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

import Image from 'react-bootstrap/Image';
const logo = require('./../../assets/profile-icon.jpg'); // with require

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
      <div className="profile-form">
        <div className="profile-form-head">
          <h2>Moj profil</h2>
        </div>

        <Container>
          <Row>
            <img className=" photo-card-image" src={logo} />
          </Row>
        </Container>
        <Container>
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
            <Form.Label>E-mail:</Form.Label>
            <ListGroup.Item disabled> {profile && `${profile.email}`}</ListGroup.Item>
          </Form.Group>

          <Form.Group>
            <Form.Label> Broj proizvoda na wish listi :</Form.Label>
            <ListGroup.Item disabled>{profile && `${profile.wishListedProducts.length}`}</ListGroup.Item>
            <Link>Idi na wishlistu</Link>
          </Form.Group>

          <Form.Group>
            <Form.Label>Moji proizvodi:</Form.Label>
            <ListGroup.Item disabled> {profile && `${profile.ownedProducts.length}`}</ListGroup.Item>
            <Link>Idi na moje proizvode</Link>
          </Form.Group>
        </Container>
        <br></br>
      </div>
    </div>
  );
}
