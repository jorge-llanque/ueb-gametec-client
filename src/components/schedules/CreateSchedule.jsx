import React, { useContext, useState } from 'react'
import { Button, Steps, message } from 'antd'
import { FirstContent } from './FirstContent';
import { TournamentContext } from '../../contexts/TournamentContext';
import { SecondStep } from './SecondStep';
import { ThirdStep } from './ThirdStep';
import { LastStep } from './LastStep';
import moment from 'moment';
import { tournamentsService } from '../../services';
const { Step } = Steps;

const defaultValue = {
  teams: [],
  games: [],
  startAt: '',
  endAt: '',
}

const steps = [
  {
    title: 'Seleccionar Grupos',
    content: <FirstContent />,
  },
  {
    title: 'Seleccionar Juegos',
    content: <SecondStep />,
  },
  {
    title: 'Configurar Parametros',
    content: <ThirdStep />,
  },
  {
    title: 'Finalizar',
    content: <LastStep />,
  },
];

export const CreateSchedule = () => {
  const [current, setCurrent] = useState(0);
  const dataContext = useContext(TournamentContext);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onSubmit = () => {
    console.log('dataContext', dataContext, defaultValue);
    const format = {
      status: "CANCELADO",
      startAt: moment(
        new Date()
          .setHours(defaultValue.startAt.slice(0, 2))).format(),
      endAt: moment(
        new Date()
          .setHours(defaultValue.endAt.slice(0, 2))).format(),
      teams: defaultValue.teams.map(id => ({ teamId: id })),
      games: defaultValue.games.map(id => ({ gameId: id }))
    }
    console.log('format', format);
    tournamentsService.insertTournament(format)
      .then(() => {

        message.success('Processing complete!')
      }).catch((err) => {
        console.log('error', err)
      })
  }

  return (
    <>
      <TournamentContext.Provider value={defaultValue}>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content" style={{ height: '420px' }}>{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={onSubmit}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </TournamentContext.Provider>
    </>
  )
}
