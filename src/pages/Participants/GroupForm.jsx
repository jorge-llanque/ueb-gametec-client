import React from 'react'
import { Avatar, Button, Col, Form, Input, List, Row, Select } from 'antd'
import { PEOPLE } from '../../utils/mocks/peopleDumb';
const { Option } = Select;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export const GroupForm = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form
            layout="vertical"
            name="basic"
            autoComplete="off"
          >
            <Form.Item>
              <h1>Formulario de Grupo</h1>
            </Form.Item>
            <Form.Item
              label="Nombre del Grupo"
            >
              <Input placeholder="Ej: 1ro A, 2do B, 3ro C" />
            </Form.Item>
            <Form.Item
              label="Agregar Participantes"
            >
              <Select
                showSearch
                placeholder={'Buscar Participante'}
                optionFilterProp="children"
              >
                {
                  PEOPLE.map((data, idx) => (
                    <Option value={data.id} key={idx}>{`${data.name} ${data.surname}`}</Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Form>

        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                actions={[<a key="list-loadmore-more">Eliminar</a>]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
