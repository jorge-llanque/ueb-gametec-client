import React, { useState, useEffect } from 'react'
import { Divider, Layout, Menu } from 'antd';
import { SIDEBAR_TABS_CONFIG } from '../../configs';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

/**
 * SidebarLayout component
 * @returns SidebarLayout component.
 */
export const SidebarLayout = () => {
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    setTabs(SIDEBAR_TABS_CONFIG.map((tab, idx) => {
      return {
        label: <Link style={{ color: "#fff" }} to={tab.link}>{tab.text}</Link>,
        key: idx,
        link: tab.link,
      }
    }))
  }, [])

  return (
    <Sider
      style={{
        borderRadius: "10px",
        backgroundColor: "#3a2fb1",
      }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Divider
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        mode='inline'
        style={{
          backgroundColor: "#3a2fb1",
          color: "#fff",
          border: "none",
        }}
        items={tabs}
      />
    </Sider>
  )
}
export default SidebarLayout