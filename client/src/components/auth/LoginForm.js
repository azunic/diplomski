import React from 'react';
import { Form, Input, Button, Checkbox, Col, Row, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import getIcon from '../../utils/iconsLoader';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';

function Login(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.succes);

  const onFinish = (values) => {
    props.history.push('/home');
    dispatch(actions.authLogin(values.email, values.password));
  };

  const goToSignup = () => {
    props.history.push('/signup');
  };
  const goToForgotPassword = () => {
    reset();
    // this.setState({ forgot: true });
  };

  function reset() {
    Modal.success({
      content: 'Poslan je reset lozinke na Vaš mail!',
    });
  }
  const errorModal = () => {
    Modal.error({
      title: 'Login failed',
      content: error,
      onOk() {
        dispatch(actions.errorConfirmed());
      },
    });
  };

  const successModal = () => {
    Modal.success({
      title: 'OK',
      content: error,
      onOk() {
        dispatch(actions.registerSuccess());
      },
    });
  };
  return (
    <div className="auth-form">
      <div className="auth-form-wrapper">
        <div className="auth-form-title">
          <img src={getIcon('logo')}></img>
          <span>Beauty Spot</span>
        </div>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { type: 'email', message: 'The input is not valid E-mail!' },
              { required: true, message: 'Please input your E-Mail!' },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                <Form.Item name="remember" valuePropName="checked" style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
              <Col xs={{ span: 12 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="link" onClick={goToForgotPassword} style={{ paddingTop: 0, paddingBottom: 0 }}>
                  Forgot password
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Col>
              <Col xs={{ span: 12 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="link" onClick={goToSignup}>
                  Or register now!
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        {error && errorModal()}
      </div>
    </div>
  );
}

export default withRouter(Login);
