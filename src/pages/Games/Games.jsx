import { Space } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GamesNavbar } from '../../components'

export const Games = () => {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: 'flex',
      }}
    >
      <GamesNavbar />
      <Outlet />
    </Space>
  )
}

export default Games