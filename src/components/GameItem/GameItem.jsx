import { Card, Col } from 'antd'
import React from 'react'
import LazyLoad from 'react-lazyload'
import { IMAGE_URL_PREFIX } from '../../configs'

export const GameItem = ({ game, theme }) => {
  return (
    <>
      <Col span={5}>
        <LazyLoad height={200} offset={200}>
          <Card
            hoverable
            cover={
              <img
                alt={game.img.alt}
                src={`${IMAGE_URL_PREFIX}${game.img.url}`}
                style={game.img.style}
              />}
            bodyStyle={{
              padding: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ebebeb',
            }}
            actions={game?.details}
          >
            <Card.Meta title={game.title} />
          </Card>
        </LazyLoad>
      </Col>
    </>
  )
}
