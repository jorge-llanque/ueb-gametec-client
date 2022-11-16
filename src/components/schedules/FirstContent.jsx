import React, { useContext, useEffect, useState } from 'react'
import { Card, Checkbox, Col, Row } from 'antd';
import { TournamentContext } from '../../contexts/TournamentContext';
import { teamsService } from '../../services';

export const FirstContent = () => {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [groupsSelected, setGroupsSelected] = useState([])
  const dataContext = useContext(TournamentContext);

  useEffect(() => {
    getTeams();
  }, [])

  const getTeams = () => {
    setLoading(true);
    teamsService.getAllTeams()
      .then((response) => {
        console.log(response);
        const formated = response.data.map((team, id) => ({ id: team.id, name: team.name }))
        setTeams(formated);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error');
        setLoading(false);
      })
  }

  const handleChange = (checkedValues) => {
    setGroupsSelected(checkedValues);
    console.log('datacontext', dataContext);
    dataContext.teams = checkedValues;
  }

  return (
    <>
      {
        loading ? <div>Cargando...</div> :
          <Checkbox.Group
            style={{ width: '100%' }}
            defaultValue={dataContext.teams || []}
            onChange={handleChange}>
            <Row gutter={[16, 16]}>
              {
                teams.map((team) => (
                  <Col span={4} key={`col-${team.name}`}>
                    <Checkbox
                      autoFocus={true}
                      value={team.id}>
                      <Card>{team.name}</Card>
                    </Checkbox>
                  </Col>
                ))
              }
            </Row>
          </Checkbox.Group>
      }
    </>
  )
}
