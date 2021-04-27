import React from 'react';
import { Form, Input, Button, Tooltip, Checkbox, Modal } from 'antd';
import getIcon from '../../utils/iconsLoader';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';

import { withRouter } from 'react-router';

const layout = {
  labelCol: { offset: 2, span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Signup(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.succes);

  const onFinish = (values) => {
    successModal();
    console.log('Success:', values);
    const { firstName, lastName, email, password, repeatPassword, username } = values;
    dispatch(actions.authRegister(firstName, lastName, email, password, repeatPassword, username));
  };

  const goToLogin = () => {
    props.history.push('/login');
  };

  const errorModal = () => {
    Modal.error({
      title: 'Sign up failed',
      content: error,
      onOk() {
        dispatch(actions.errorConfirmed());
      },
    });
  };
  const successModal = () => {
    Modal.success({
      title: 'Uspješno ste se registrirali! ',
      content: success,
      onOk() {
        dispatch(actions.registerSuccess());
      },
    });
  };

  const forgotModal = () => {
    Modal.success({
      title: 'Na vas mail je poslan reset lozinke ! ',
      content: 'success',
    });
  };

  return (
    <div className="auth-form">
      <div className="auth-form-wrapper">
        <div className="auth-form-title">
          <img src={getIcon('logo')}></img>
          <span>Signup - Beauty Spot</span>
        </div>
        <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input autoComplete="true" offset={4} span={6} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password offset={4} span={6} />
          </Form.Item>

          <Form.Item
            name="repeatPassword"
            label="Repeat Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password offset={4} span={6} />
          </Form.Item>

          <Form.Item
            name="username"
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
          >
            <Input offset={4} span={6} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) },
            ]}
            {...tailLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="link" style={{ padding: 0 }} onClick={goToLogin}>
              Have an account? Click here to log in
            </Button>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {error && errorModal()}
      </div>
    </div>
  );
}

export default withRouter(Signup);
