import React from 'react';
import { Button, Form, Input, InputNumber,Select } from 'antd';
import { Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

function Register() {
  return (
    <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 300,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    
    <Form.Item name={['user', 'phone number']} label="phone number">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Password">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="confirm Password">
      <Input />
    </Form.Item>
    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your country!',
        },
      ]}
    >
      <Select placeholder="Please select a country">
        <Option value="1">Level 1</Option>
        <Option value="2">Level 2</Option>
        <Option value="3">Level 3</Option>
        <Option value="4">Level 4</Option>
      </Select>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Link to="/login"><Button type="primary" htmlType="submit">
        Submit
      </Button></Link>
    </Form.Item>
  </Form>
);
  
}

export default Register