import { Space } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { GamesNavbar } from '../../components'

export const Games = () => {
  return (
    <div
      style={{
        height: 'inherit',
        overflow: 'auto',
      }}
    >
      <Space
        direction="vertical"
        size="large"
        style={{
          display: 'flex',
          height: 'inherit',
          width: 'inherit',
          overflow: 'auto',
        }}
      >
        <GamesNavbar />
        <div
          className='site-layout-content'
          style={{ overflow: 'auto', height: 'inherit' }}
        >
          <Outlet />
        </div>
      </Space>
    </div>
  )
}

export default Games