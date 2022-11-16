import React, { useContext, useEffect, useState } from 'react'
import { Card, Checkbox, Col, Row, TimePicker } from 'antd';
import { TournamentContext } from '../../contexts/TournamentContext';
import { gamesService } from '../../services';
import moment from 'moment';

export const ThirdStep = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [groupsSelected, setGamesSelected] = useState([])
  const dataContext = useContext(TournamentContext);

  const format = 'HH:mm';

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

  const handleStartAt = (time) => {
    dataContext.startAt = moment(time).format(format);
  }

  const handleEndAt = (time) => {
    dataContext.endAt = moment(time).format(format);
  }

  return (
    <>
      {
        loading ? <div>Cargando...</div> :
          <div>
            <TimePicker
              onSelect={handleStartAt}
              defaultValue={dataContext.startAt ? moment(dataContext.startAt, format) : moment('12:08', format)}
              format={format} />

            <TimePicker
              onSelect={handleEndAt}
              defaultValue={dataContext.endAt ? moment(dataContext.endAt, format) : moment('12:08', format)}
              format={format} />
          </div>
      }
    </>
  )
}
