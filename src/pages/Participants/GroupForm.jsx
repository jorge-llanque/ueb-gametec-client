import React, { useEffect, useState } from 'react'
import { Avatar, Button, Col, Form, Input, List, Modal, PageHeader, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import { ParticipantList } from '../../components';
import { useNavigate } from 'react-router-dom';
import { teamsService } from '../../services';

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
  {
    title: 'Ant Design Title 5',
  },
];

export const GroupForm = () => {
  const _navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)
  const [participantList, setParticipantList] = useState(data)
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    getParticipants()
  }, [])

  const getParticipants = () => {
    teamsService.getAllPlayers()
      .then(response => {
        console.log(response.data)
        setParticipants(response.data.map(participant => ({ ...participant, key: participant.id })))
      }).catch(error => {
        console.log(error)
      })
  }

  const handleOnFinish = (values) => {
    console.log(values)
    const team = {
      name: values.name,
      players: participantList.map(participant => ({ playerId: participant.id }))
    }
    console.log('team', team)
    teamsService.createTeam(team)
      .then(response => {
        console.log(response)
        _navigate('/participants')
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <PageHeader
        onBack={() => _navigate(-1)}
        title="Nuevo Grupo"
        style={{ padding: 0 }}
      />
      <Form
        layout="vertical"
        name="basic"
        autoComplete="off"
        onFinish={handleOnFinish}
      >
        <Form.Item
          name='name'
          label={<h1>Nombre del Grupo</h1>}
          style={{ width: '300px' }}
        >
          <Input
            placeholder="Ej: 1ro A, 2do B, 3ro C" />
        </Form.Item>
        <Row>
          <Col span={24}>
            <h1>Lista de Participantes</h1>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              icon={<UsergroupAddOutlined />}
              onClick={() => setOpenModal(true)}
            >Agregar Participantes</Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <List
              style={{ minHeight: '200px' }}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              itemLayout="horizontal"
              dataSource={participantList}
              renderItem={(item) => (
                <List.Item
                  actions={[<a key="list-loadmore-more">Eliminar</a>]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{`${item.name} ${item.lastname}`}</a>}
                    description={`${item.genre} | Turno ${item.educationLevel} | ${item.course}`}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button>Cancelar</Button>
            <Button type="primary" htmlType="submit">Guardar</Button>
          </Col>
        </Row>
      </Form>
      {
        openModal && (
          <Modal
            maskClosable={false}
            title="Agregar Participantes"
            open={openModal}
            onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}
            width={720}
          >
            <ParticipantList participantList={participants} select={setParticipantList} />
          </Modal>
        )
      }
    </>
  )
}
