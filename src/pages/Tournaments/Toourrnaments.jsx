import { Badge, Button, Modal, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { CreateSchedule } from '../../components'
import { tournamentsService } from '../../services'

export const Toourrnaments = () => {
  const [openModal, setOpenModal] = useState(false)
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    getTournaments()
  }, [])

  const formatGroupsAndGames = (list) => {
    return list.map(item => item.title).join(' | ')
  }

  const getTournaments = () => {
    tournamentsService.getAllTournaments()
      .then(response => {
        console.log(response.data)
        const formated = response.data.data.map((tournament, id) => ({
          key: id,
          programacionId: `#001`,
          grupo: formatGroupsAndGames(tournament.teams),
          profesor: tournament.teacherName,
          juegos: formatGroupsAndGames(tournament.games),
          fechaInicio: new Date(tournament.startAt).toLocaleDateString(),
          fechaFin: new Date(tournament.endAt).toLocaleDateString(),
          status: tournament.status,
          estado: <Badge status='error' />,
          acciones: 'Editar, Eliminar',
        }))
        setTournaments(formated)

      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Button type='primary' onClick={() => setOpenModal(true)}>Programar Rally</Button>
      <h1>Indicadores</h1>
      <Space>
      <Badge status="success" text="En Progreso" />
      <Badge status="warning" text="En Espera" />
      <Badge status="error" text="Cancelado" />
      </Space>
      <h1>Programaciones</h1>

      <Table
        size='small'
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
        size='small'
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 15,
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
        dataSource={tournaments}
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
