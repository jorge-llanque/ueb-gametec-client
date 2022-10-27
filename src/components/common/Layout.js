import {useEffect} from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { Layout as Template } from "antd"
import {Header} from './Header';
import SidebarLayout from "./SidebarLayout";
const { Content, Footer } = Template

/**
 * Main layout to use when an user is logged in.
 * @returns Layout component.
 */
export const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/games/all');
  },[])
  return (
    <Template className='layout'>
      <Header/>
      <Template
        style={{
          padding: "0 20px",
          margin: "16px 0",
          gap: "10px",
        }}
      >
        <SidebarLayout/>
        <Content>
          <div className='site-layout-content'>
            <Outlet/>
          </div>
        </Content>
      </Template>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Jorge LLanque ©2022 Created by Jorge LLanque
      </Footer>
    </Template>
  )
}

export default Layout