import React, { useState, useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, FolderOpenOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { GamesGrid } from '../../components'
import { Button, Modal } from 'antd';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { gamesService } from '../../services';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [games, setGames] = useState(null);
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [loading, setLoading] = useState(true)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const shortcuts = [
    <Button
      icon={<PlayCircleOutlined />}
      key='1'
      size="small"
      shape="round"
      type="text"
      onClick={showModal}
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
    getAvailableGames();
  }, [])

  const getAvailableGames = () => {
    setLoading(true)
    gamesService.getAvailableGames()
      .then(({ data }) => {
        console.log('aaa', data)
        const formated = data.map((data) => {
          return {
            ...data,
            img: {
              url: data.game.multimedia[0].routeUrl,
              alt: `Imagen de ${data.game.title}`,
              style: {
                height: 180,
                objectFit: 'cover',
              }
            },
            title: data.game.title,
            details: [
              <Button
                icon={<PlayCircleOutlined />}
                key='1'
                size="small"
                shape="round"
                type="text"
                onClick={showModal}
              >
                Tutorial
              </Button>,
              <Button
                icon={<FolderOpenOutlined />}
                key='2'
                size="small"
                shape="round"
                type="text"
                onClick={() => navigate(`${data.game.id}/details`)}
              >
                Ver Detalles
              </Button>
            ]
          }
        })
        setGames(formated);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }


  return (
    <>
      {
        gameId ? (
          <Outlet />)
          : (
            <>
              {
                loading ? (
                  <div>Cargando...</div>
                ) : (
                  <GamesGrid gallery={games} details={options} />
                )
              }

              <Modal
                onCancel={() => setIsModalOpen(false)}
                width={920}
                closable={false}
                centered
                title="Basic Modal" open={isModalOpen}>
                <ReactPlayer
                  url="https://player.vimeo.com/video/203233231?h=ce378dbc53"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Modal>

            </>
          )
      }
    </>
  )
}
