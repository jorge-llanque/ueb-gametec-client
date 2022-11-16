import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'

export const GamesGrid = ({ gallery, details }) => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setCollection(gallery.map((item, idx) => {
      return (
        <Col key={idx} span={6}>
          <Card
            hoverable
            cover={
              <img
                alt={item.img.alt}
                src={`https://drive.google.com/uc?export=view&id=${item.img.url}`}
                style={item.img.style}
              />}
            bodyStyle={{
              padding: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ebebeb',
            }}
            actions={item?.details}
          >
            <Card.Meta title={item.title} />
          </Card>
        </Col>
      )
    }))
  }, [details])
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
        {collection}
      </Row>
    </div>
  )
}
