import React from 'react';
import { Form, Input, Button } from 'antd';
import getIcon from '../../utils/iconsLoader';

import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const layout = {
  labelCol: { offset: 4, span: 4 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default function Login() {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(actions.authLogin(values.email, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const renderSignupForm = () => {};

  return (
    <div className="auth-form">
      <div className="auth-form-wrapper">
        <div className="auth-form-title">
          <img src={getIcon('logo')}></img>
          <span>Beauty Spot</span>
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
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
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password autoComplete="true" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="link" style={{ padding: 0 }} onClick={renderSignupForm}>
              Don't have an account? Sign up
            </Button>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
