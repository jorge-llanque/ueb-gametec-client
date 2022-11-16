import { Button, Card, Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants';
import { teamsService } from '../../services';

export const Participants = () => {
  const _navitage = useNavigate();
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, [])


  const getTeams = () => {
    setLoading(true);
    teamsService.getAllTeams()
      .then((response) => {
        console.log(response);
        setTeams(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error');
        setLoading(false);
      })
  }


  const handleOnClick = () => {
    _navitage(APP_ROUTES.PARTICIPANTS_GROUP_NEW);
  }

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: 'flex',
        height: '100%',
        overflow: 'none',
      }}
    >
      <Button onClick={handleOnClick}>Nuevo Grupo </Button>
      {
        loading
          ? <div>Cargando...</div>
          :
          <Row gutter={[16, 16]}>
            {
              teams.map((team) => (
                <Col span={4} key={`col-${team.name}`}>
                  <Card
                    headStyle={{ backgroundColor: "#c96c6c", }}
                    hoverable
                    title={team.name}
                  >
                    <p>🧑‍🏫 Guía: {team.guideName}</p>
                    <p>👦🏾 Jugadores: {team.playersTotal}</p>
                  </Card>
                </Col>

              ))
            }
          </Row>
      }

      <Outlet />
    </Space>
  )
}

export default Participants