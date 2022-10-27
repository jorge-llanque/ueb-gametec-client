import React, { useState, useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, FolderOpenOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { GamesGrid } from '../../components'
import { Button } from 'antd';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const images = [
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleOne',
  },
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text 2",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleTwo',
  },
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text3",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleThree',
  },
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text4",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleFour',
  },
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text5",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleFive',
  },
  {
    img: {
      url: "https://pwestpathfinder.com/wp-content/uploads/2018/03/Fortnite2Fblog2Fannouncing-fortnite-battle-royale2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-272f96ba0af86b42fc058a132f158a8c23d725eb-900x506.jpg",
      alt: "Alt Text6",
      style: {
        height: 180,
        objectFit: 'cover',
      }
    },
    title: 'titleSix',
  },
]





export const GamesAvailable = () => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const { gameId } = useParams();

  const shortcuts = [
    <Button
      icon={<PlayCircleOutlined />}
      key='1'
      size="small"
      shape="round"
      type="text"
    >
      Tutorial
    </Button>,
    <Button
      icon={<FolderOpenOutlined />}
      key='2'
      size="small"
      shape="round"
      type="text"
      onClick={() => navigate('1/details')}
    >
      Ver Detalles
    </Button>
  ]

  useEffect(() => {
    setOptions(shortcuts);
  }, [])

  return (
    <>
      {
        gameId ? (
          <Outlet />)
          : (
            <GamesGrid gallery={images} details={options} />
          )
      }
    </>
  )
}
