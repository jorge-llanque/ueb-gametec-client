import { Outlet } from "react-router-dom";
import { Layout as Template, Menu } from "antd"
import SidebarLayout from "./SidebarLayout";
import { Authorize } from '../../core';
import { STUDENTS_TOP_TABS_CONFIG } from "../../configs";

import svg from './../../utils/static/books-icon.svg';
import mathsvg from './../../utils/static/math-symbols.svg';
import gamesvg from './../../utils/static/game-default.svg';
import volumesvg from './../../utils/static/volume.svg';
const { Content, Footer } = Template
const { Header } = Template

/**
 * Main layout to use when a participant is logged in.
 * @returns Layout component.
 */
export const LayoutForParticipants = () => {

  return (
    <Template className='login-layout'>
      <Header style={{ backgroundColor: "#3a2fb1", height: '80px' }}>
        <div className='logo' />
        <Menu
          mode='horizontal'
          style={{
            justifyContent: "flex-end",
            backgroundColor: "#3a2fb1",
            color: "white",
            border: "none",
            gap: "1rem",
          }}>
          <Menu.SubMenu
            key='1'
            title={<img
              src={svg}
              alt="wefw"
              style={{ width: '40px' }} />}
          >
            <Menu.Item
              key='6'
              style={{
                display: 'inline-block',
                backgroundColor: '#f1f1f1',
                width: '200px',
                height: '100px'
              }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://imgs2.dab3games.com/pou-online8289.png"
                alt="sfsf" />
            </Menu.Item>
            <Menu.Item
              key='7'
              style={{
                display: 'inline-block',
                backgroundColor: '#f1f1f1',
                width: '200px',
                height: '100px'
              }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://i.pinimg.com/originals/d0/26/6c/d0266cd948f7b7878759580f8316fc3b.jpg"
                alt="sfsf" />
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key='2'
            title={<img
              src={mathsvg}
              alt="wefw"
              style={{ width: '40px' }} />}>
            <Menu.Item
              key='3'
              style={{
                display: 'inline-block',
                backgroundColor: '#f1f1f1',
                width: '200px',
                height: '100px'
              }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg"
                alt="sfsf" />
            </Menu.Item>
            <Menu.Item
              key='4'
              style={{
                display: 'inline-block',
                backgroundColor: '#f1f1f1',
                width: '200px',
                height: '100px'
              }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://www.latercera.com/resizer/wcQd_wjJIuFkuMew_I6rgtl7y1E=/arc-anglerfish-arc2-prod-copesa/public/QX6IIWPN5BHTTAT3CBFQOAMBTI.jpg"
                alt="sfsf" />
            </Menu.Item>
            <Menu.Item
              key='5'
              style={{
                display: 'inline-block',
                backgroundColor: '#f1f1f1',
                width: '200px',
                height: '100px'
              }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://i.pinimg.com/originals/26/96/27/2696272a5504bfeb852981969110cb89.jpg"
                alt="sfsf" />
            </Menu.Item>

          </Menu.SubMenu>
        </Menu>
      </Header>
      <Template
        style={{
          margin: "16px 0",
          gap: "10px",
          width: "80%",
        }}
      >
        <Content>
          <div
            className='site-layout-content'
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={gamesvg}
              alt="sfsf2"
              style={{ width: '70%', height: '85%' }}
            />
            <img
              src={volumesvg}
              alt="sfsf23"
              style={{
                position: 'absolute',
                width: '70px',
                top: '100px',
                left: '200px'
              }}
            />
          </div>
        </Content>
      </Template>

    </Template>
  )
}

export default LayoutForParticipants