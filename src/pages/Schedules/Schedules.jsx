import React, { useState } from 'react'
import { Badge, Button, Modal, Table } from 'antd'
import { CreateSchedule } from '../../components'

export const Schedules = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button type='primary' onClick={() => setOpenModal(true)}>Programar Rally</Button>
      <h1>Indicadores</h1>
      <Badge status="success" text="En Progreso" />
      <Badge status="warning" text="En Espera" />
      <Badge status="error" text="Vencido" />
      <h1>Programaciones</h1>

      <Table
        columns={[
          {
            title: '',
            dataIndex: 'estado',
            key: 'estado',
            width: 10,
          },
          {
            title: 'Id',
            dataIndex: 'programacionId',
            key: 'programacionId',
          },
          {
            title: 'Grupo',
            dataIndex: 'grupo',
            key: 'grupo',
          },
          {
            title: 'Profesor',
            dataIndex: 'profesor',
            key: 'profesor',
          },
          {
            title: 'Juegos',
            dataIndex: 'juegos',
            key: 'juegos',
          },
          {
            title: 'Fecha Inicio',
            dataIndex: 'fechaInicio',
            key: 'fechaInicio',
          },
          {
            title: 'Fecha Fin',
            dataIndex: 'fechaFin',
            key: 'fechaFin',
          },
          {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
          }
        ]}
        dataSource={[
          {
            key: '1',
            programacionId: '#46546',
            grupo: '1ro A',
            profesor: 'Julio Cesar',
            juegos: 'Juego 1, Juego 2, Juego 3',
            fechaInicio: '01/01/2021 12:00',
            fechaFin: '01/01/2021 12:00',
            estado: <Badge status="success" />,
            acciones: 'Controles, Detener',
          },
          {
            key: '2',
            programacionId: '#46546',
            grupo: '1ro A',
            profesor: 'Julio Cesar',
            juegos: 'Juego 1, Juego 2, Juego 3',
            fechaInicio: '01/01/2021 12:00',
            fechaFin: '01/01/2021 12:00',
            estado: <Badge status="warning" />,
            acciones: 'Controles, Detener',
          },
        ]}
      />
      <h1>Historial de Programaciones</h1>
      <Table
        columns={[
          {
            dataIndex: 'estado',
            key: 'estado',
            width: 10,
          },
          {
            title: 'Id',
            dataIndex: 'programacionId',
            key: 'programacionId',
          },
          {
            title: 'Grupo',
            dataIndex: 'grupo',
            key: 'grupo',
          },
          {
            title: 'Profesor',
            dataIndex: 'profesor',
            key: 'profesor',
          },
          {
            title: 'Juegos',
            dataIndex: 'juegos',
            key: 'juegos',
          },
          {
            title: 'Fecha Inicio',
            dataIndex: 'fechaInicio',
            key: 'fechaInicio',
          },
          {
            title: 'Fecha Fin',
            dataIndex: 'fechaFin',
            key: 'fechaFin',
          },
          {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
          }
        ]}
        dataSource={[
          {
            key: '1',
            programacionId: '#46546',
            grupo: '1ro A',
            profesor: 'Julio Cesar',
            juegos: 'Juego 1, Juego 2, Juego 3',
            fechaInicio: '01/01/2021 12:00',
            fechaFin: '01/01/2021 12:00',
            estado: <Badge status="error" />,
            acciones: 'Editar, Eliminar',
          },
          {
            key: '2',
            programacionId: '#46546',
            grupo: '1ro A',
            profesor: 'Julio Cesar',
            juegos: 'Juego 1, Juego 2, Juego 3',
            fechaInicio: '01/01/2021 12:00',
            fechaFin: '01/01/2021 12:00',
            estado: <Badge status="error" />,
            acciones: 'Editar, Eliminar',
          },
        ]}
      />

      {
        openModal && (
          <Modal
            title='Programar Rally'
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={null}
            width={1000}
          >
            <CreateSchedule />
          </Modal>
        )
      }

    </>
  )
}

export default Schedules