import { Button, Image, Space, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { CollectionLists, TeamItem } from '../../components';
import { APP_ROUTES } from '../../constants';
import { teamsService } from '../../services';
import teamicon from '../../utils/static/team-icon.svg';
import { TeamOutlined } from '@ant-design/icons';
import emptyImage from '../../utils/static/empty.svg'

export const Participants = () => {
  const _navitage = useNavigate();
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, [])


  const getTeams = () => {
    setLoading(true);
    teamsService.getAllTeams()
      .then((response) => {
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
  const handleNewParticipants = () => {
    _navitage(APP_ROUTES.PARTICIPANTS_LIST);
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
      <div>
        <Button type="primary" onClick={handleOnClick} icon={<TeamOutlined />}>Nuevo Team </Button>
        <Button type="secondary" onClick={handleNewParticipants} icon={<TeamOutlined />}>Registro de Participantes</Button>
      </div>
      {loading
        ? (<Spin />)
        : (
          <CollectionLists>
            {!teams.length && <img src={emptyImage} alt="" style={{ width: '200px', display: 'flex', margin: '0 auto' }} />}
            {teams.map((team, idx) => (
              <TeamItem team={team} key={idx} />
            ))
            }
          </CollectionLists>
        )
      }
      <Outlet />
    </Space>
  )
}

export default Participants