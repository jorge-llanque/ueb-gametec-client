import { Card, Col } from 'antd'

export const TeamItem = ({ team }) => {
  return (
    <>
      <Col span={4} key={`col-${team.name}`}>
        <Card
          headStyle={{ backgroundColor: "#c96c6c", }}
          hoverable
          title={team.name}
        >
          <p>ð§âð« GuÃ­a: {team.guideName}</p>
          <p>ð¦ð¾ Jugadores: {team.playersTotal}</p>
        </Card>
      </Col>
    </>
  )
}
