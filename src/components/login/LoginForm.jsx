import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Radio } from 'antd'
import useAuth from '../../utils/hooks/useAuth';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const validationMessages = {
    required: "El campo '${name}' es requerido",
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={login}
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

      <Form.Item>
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
