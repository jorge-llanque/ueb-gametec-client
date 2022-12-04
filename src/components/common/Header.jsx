import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { TOP_TABS_CONFIG } from '../../configs';
import useAuth from '../../utils/hooks/useAuth';

const { Header: HeaderAntd } = Layout;

/**
 * Header Component with Top Tabs.
 * @returns Header Component
 */
export const Header = () => {
  const [topTabs, setTopTabs] = useState([])
  const {logout} = useAuth();

  useEffect(() => {
    // Validate permissions by role is pending.

    const listTopHeader = TOP_TABS_CONFIG.map((tab, idx) => ({ label: tab.text, key: idx }))

    setTopTabs([
      ...listTopHeader,
      {
        key: 'logout',
        label: 'Cerrar Sesión',
        onClick: () => {
          logout();
        }
      }
    ])

  }, [])
  return (
    <HeaderAntd style={{ backgroundColor: "#3a2fb1" }}>
      <div className='logo' />
      <Menu
        mode='horizontal'
        style={{
          justifyContent: "flex-end",
          backgroundColor: "#3a2fb1",
          color: "white",
          border: "none",
          gap: "1rem",
        }}
        items={topTabs}
      />
    </HeaderAntd>
  )
}

export default Header