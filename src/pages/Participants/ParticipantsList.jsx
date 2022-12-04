import { Button, Col, Form, Input, PageHeader, Row, Spin, Table } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { teamsService } from '../../services'

const columns = [
  {
    title: 'Nombres',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellidos',
    dataIndex: 'lastnames',
    key: 'lastnames',
  },
  {
    title: 'Genero',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Curso',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Operaciones',
    dataIndex: 'options',
    key: 'options',
    width: 150,
    render: () => <Button type="link">Eliminar</Button>
  }
]

export const ParticipantsList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudents()
  }, []);

  const getStudents = () => {
    setLoading(true)
    teamsService.getAllStudents()
      .then(data => {
        const formated = data.map((item, index) => {
          return {
            key: index,
            name: item.person.fullname,
            lastnames: item.person.lastname,
            genre: item.person.genre,
            course: item.person.course,
          }
        })
        setData(formated)
        setLoading(false)
      })
  }

  const onFinish = (values) => {
    const toSend = {
      ...values,
      username: values.fullname,
      password: 'aA123#',
      contractId: 20,
      role: 'Student',
    }

    teamsService.postStudent(toSend).then(response => {
      console.log('response', response)
      Form.resetFields()
      getStudents()
    })
  }

  return (
    <>
      <PageHeader
        onBack={() => { }}
        title="Nuevo Participante"
        style={{ padding: 0 }}
      />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout='vertical'
      >
        <Row>
          <Col>
            <Form.Item
              label="Nombres"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: 'please input your name',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Apellidos"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: 'please input your lastname',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Genero"
              name="genre"
              rules={[
                {
                  required: true,
                  message: 'please input your genre',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Curso"
              name="course"
              rules={[
                {
                  required: true,
                  message: 'please input your course',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>


        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {loading
        ? <Spin />
        : <Table columns={columns} dataSource={data} />
      }
    </>
  )
}

export default ParticipantsList