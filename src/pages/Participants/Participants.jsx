import { Button, Card, Col, Row, Space } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants';

export const Participants = () => {
  const _navitage = useNavigate();

  const handleOnClick = () => {
    _navitage(APP_ROUTES.PARTICIPANTS_GROUP_NEW);
  }

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: 'flex',
      }}
    >
      <Button onClick={handleOnClick}>Nuevo Grupo </Button>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Card
            headStyle={{ backgroundColor: "#c96c6c", }}
            hoverable
            title="Team One"
          >
            <p>Creador: Jorge LLanque</p>
            <p>Participantes: 30</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            headStyle={{ backgroundColor: "blueviolet" }}
            title="Team Two">
            <p>Creador: Test</p>
            <p>Participantes: 23</p>
          </Card>
        </Col>
      </Row>
      <Outlet />
    </Space>
  )
}

export default Participants