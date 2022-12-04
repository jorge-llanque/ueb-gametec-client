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
          <p>🧑‍🏫 Guía: {team.guideName}</p>
          <p>👦🏾 Jugadores: {team.playersTotal}</p>
        </Card>
      </Col>
    </>
  )
}
