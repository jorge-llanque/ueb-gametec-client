import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../services';

export const LoginForm = () => {
  const navigate = useNavigate();

  const validationMessages = {
    required: "El campo '${name}' es requerido",
  };

  const onFinish = (values) => {
    loginService.login({ username: values.username, password: values.password })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={() => { }}
      autoComplete="off"
      layout='vertical'
      size='large'
      validateMessages={validationMessages}
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[{ required: true }]}
      >
        <Input placeholder="Ingresar Usuario" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password placeholder='Ingresar Contraseña' />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
      >
        <Button
          type="primary"
          htmlType="submit"
        >
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}
