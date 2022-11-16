import React, { useEffect, useState } from 'react'
import { Col, Descriptions, PageHeader, Row, Typography } from 'antd'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'
import { gamesService } from '../../services'

export const GameDetails = () => {
  const { gameId } = useParams()
  const _navigate = useNavigate()
  const [gameDetails, setGameDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGameById();
  }, [])

  const getGameById = async () => {
    setLoading(true)
    const response = await gamesService.getGameById(gameId)
    setGameDetails(response.data)
    setLoading(false)

  }

  return (
    <div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <PageHeader
              onBack={() => _navigate(-1)}
              title="Detalles del Juego"
              style={{ padding: 0 }}
            />
            <Row>
              <Col span={24}>
                <Typography.Title level={3}>{gameDetails.title}</Typography.Title>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Descriptions column={1}>
                  <Descriptions.Item label="😁Categoria">{gameDetails.subGroup.title}</Descriptions.Item>
                  <Descriptions.Item label="💪Dificultad">{gameDetails.paR_Difficulty.title}</Descriptions.Item>
                  <Descriptions.Item label="🤩Popularidad">30% de aceptacion</Descriptions.Item>
                  <Descriptions.Item label="⌛Tiempo de duracion">{gameDetails.configurationDetails.durationTime}</Descriptions.Item>
                  <Descriptions.Item label="🔊Musica y Sonidos">{gameDetails.configurationDetails.hasSound ? 'Yes' : 'No'}</Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={12}>
                <ReactPlayer
                  url={gameDetails.tutorial}
                  controls={true}
                  width="100%"
                  height="20em"
                  light={true}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Typography.Title level={5}>Descripcion del Juego</Typography.Title>
                <Typography.Paragraph>{gameDetails.description}</Typography.Paragraph>
                {/* <Typography.Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint.</Typography.Paragraph>
                <Typography.Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography.Paragraph> */}

                <Typography.Title level={5}>Instrucciones del Juego</Typography.Title>
                <ol>
                  <li>{gameDetails.configurationDetails.instructions}</li>
                </ol>
              </Col>
            </Row>


          </div>
        )
      }
    </div>
  )
}
