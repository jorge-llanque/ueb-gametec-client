import React from "react"
import { Breadcrumb, Layout as Template, Menu, Avatar, Divider, Row, Col, Card } from "antd"
import { BellFilled, BulbOutlined, HomeOutlined, SearchOutlined } from "@ant-design/icons"
const { Header, Content, Footer, Sider } = Template
const { Meta } = Card

export default function Layout() {
  return (
    <Template className='layout'>
      <Header style={{ backgroundColor: "#3a2fb1" }}>
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
          items={[
            {
              label: "Search",
              key: "search",
              icon: <SearchOutlined />,
            },
            {
              label: "Theme",
              key: "theme",
              icon: <BulbOutlined />,
            },
            {
              label: "Notifications",
              key: "notifications",
              icon: <BellFilled />,
            },
            {
              label: "Home",
              key: "home",
              icon: <HomeOutlined />,
            },
          ]}
        />
      </Header>
      <Template
        style={{
          padding: "0 20px",
          margin: "16px 0",
          gap: "10px",
        }}
      >
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
              backfaceVisibility: "hidden",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
            items={[
              {
                label: "Principal",
                key: "Principal",
                icon: <HomeOutlined />,
              },
              {
                label: "Juegos",
                key: "Juegos",
                icon: <HomeOutlined />,
              },
              {
                label: "Equipos",
                key: "Equipos",
                icon: <HomeOutlined />,
              },
              {
                label: "Reportes",
                key: "Reportes",
                icon: <HomeOutlined />,
              },
              {
                label: "Configuración",
                key: "Configuración",
                icon: <HomeOutlined />,
              },
            ]}
          />
        </Sider>
        <Content>
          <div className='site-layout-content'>
            <Row gutter={16}>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
              <Col className='gutter-row' span={6}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    />
                  }
                >
                  <Meta title='Europe Street beat' description='www.instagram.com' />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Template>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Template>
  )
}
