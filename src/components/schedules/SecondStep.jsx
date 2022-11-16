import React, { useContext, useEffect, useState } from 'react'
import { Card, Checkbox, Col, Row } from 'antd';
import { TournamentContext } from '../../contexts/TournamentContext';
import { gamesService } from '../../services';

export const SecondStep = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [groupsSelected, setGamesSelected] = useState([])
  const dataContext = useContext(TournamentContext);

  useEffect(() => {
    getGames();
  }, [])

  const getGames = () => {
    setLoading(true);
    gamesService.getAvailableGames()
      .then((response) => {
        const formated = response.data.map(({ game }, idx) => ({ key: idx, name: game.title, id: game.id }))
        console.log('formated', formated);
        setGames(formated);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error');
        setLoading(false);
      })
  }

  const handleChange = (checkedValues) => {
    setGamesSelected(checkedValues);
    console.log('datacontext', dataContext);
    dataContext.games = checkedValues;
  }

  return (
    <>
      {
        loading ? <div>Cargando...</div> :
          <Checkbox.Group
            style={{ width: '100%' }}
            defaultValue={dataContext.games || []}
            onChange={handleChange}>
            <Row gutter={[16, 16]}>
              {
                games.map((game, idx) => (
                  <Col span={4} key={`col-${idx}`}>
                    <Checkbox
                      autoFocus={true}
                      value={game.id}>
                      <Card>{game.name}</Card>
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
