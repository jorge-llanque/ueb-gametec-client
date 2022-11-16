import { Badge, Descriptions } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { TournamentContext } from '../../contexts/TournamentContext';
import { gamesService, teamsService } from '../../services';

export const LastStep = () => {
  const dataContext = useContext(TournamentContext);
  const [loading, setLoading] = useState(false);
  const [teamsFiltered, setTeamsFiltered] = useState([]);
  const [gamesFiltered, setGamesFiltered] = useState([]);

  useEffect(() => {
    getTeams();
    getGames();
  }, [])

  const getTeams = () => {

    setLoading(true);
    teamsService.getAllTeams()
      .then((response) => {
        console.log(response);
        const teamsFiltered = response.data.filter((team) => dataContext.teams.includes(team.id));
        setTeamsFiltered(teamsFiltered);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error');
        setLoading(false);
      })
  }

  const getGames = () => {
    setLoading(true);
    gamesService.getAvailableGames()
      .then((response) => {
        const formated = response.data.filter(({ game }) => dataContext.games.includes(game.id));
        console.log(formated, 'games');
        setGamesFiltered(formated);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setLoading(false);
      })
  }


  return (
    <>
      {
        loading ? <div>Cargando...</div> :
          <Descriptions
            title="Resumen"
            layout="vertical"
            column={1}
            size="small"
            bordered>
            <Descriptions.Item label={`Equipos (${teamsFiltered.length})`}>{teamsFiltered.map(team => (team.name)).join(' | ')}</Descriptions.Item>
            <Descriptions.Item label={`Juegos (${gamesFiltered.length})`}>{gamesFiltered.map(game => (game.game.title)).join(' | ')}</Descriptions.Item>
            <Descriptions.Item label="Tiempo" span={2}>
              {`Desde ${dataContext.startAt} hrs hasta ${dataContext.endAt} hrs`}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text="Running" />
            </Descriptions.Item>
          </Descriptions>
      }

    </>
  )
}
