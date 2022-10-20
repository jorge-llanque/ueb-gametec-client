import React from 'react'
import { Carousel } from 'antd'

const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '520px',
  textAlign: 'center',
  backgroundImage: 'url(https://variety.com/wp-content/uploads/2019/10/fortnite-season-x-out-of-time.png)',
};

export const GamesRelease = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}
