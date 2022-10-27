import { Descriptions, Typography } from 'antd'
import React from 'react'

export const GameDetails = () => {
  return (
    <div>
      <Typography.Title level={3}>El Carreton</Typography.Title>
      <Descriptions column={1}>
        <Descriptions.Item label="Categoria">Juegos de Logica</Descriptions.Item>
        <Descriptions.Item label="Dificultad">Facil</Descriptions.Item>
        <Descriptions.Item label="Popularidad">30% de aceptacion</Descriptions.Item>
        <Descriptions.Item label="Promedio de duracion">10 min.</Descriptions.Item>
      </Descriptions>

      <Typography.Title level={5}>Descripcion del Juego</Typography.Title>
      <Typography.Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint.</Typography.Paragraph>
      <Typography.Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit voluptas dicta recusandae fugit animi inventore amet at earum! Voluptas adipisci provident quisquam reprehenderit est accusamus earum autem, deserunt sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography.Paragraph>

      <Typography.Title level={5}>Instrucciones del Juego</Typography.Title>
      <ol>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</li>
      </ol>

    </div>
  )
}
