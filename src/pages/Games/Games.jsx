import { Space } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { GamesNavbar } from '../../components'

export const Games = () => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/games') {
      navigate("/games/all")
    }
  }, [location])

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