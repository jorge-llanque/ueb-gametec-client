import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { FolderOpenOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { GamesGrid } from '../../components'
import { Button, Modal } from 'antd';
import { gamesService } from '../../services';



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

              <ModalVideo
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                channel='vimeo'
                videoId='203233231?h=ce378dbc53'
                />
              <style jsx>{`
        @-webkit-keyframes :global(modal-video) {
          0% {
            opacity: 0;
          }
      
          to {
            opacity: 1;
          }
        }
        
        @keyframes :global(modal-video) {
          0% {
            opacity: 0;
          }
      
          to {
            opacity: 1;
          }
        }
        
        @-webkit-keyframes :global(modal-video-inner) {
          0% {
            transform: translateY(100px);
          }
      
          to {
            transform: translate(0);
          }
        }
        
        @keyframes :global(modal-video-inner) {
          0% {
            transform: translateY(100px);
          }
      
          to {
            transform: translate(0);
          }
        }
        
        :global(.modal-video) {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.5);
          z-index: 1000000;
          cursor: pointer;
          opacity: 1;
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: .3s;
          animation-duration: .3s;
          -webkit-animation-name: modal-video;
          animation-name: modal-video;
          transition: opacity .3s ease-out;
        }
        
        :global(.modal-video-effect-exit) {
          opacity: 0;
        }
        
        :global(.modal-video-effect-exit .modal-video-movie-wrap) {
          transform: translateY(100px);
        }
        
        :global(.modal-video-body) {
          max-width: 940px;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: table;
        }
        
        :global(.modal-video-inner) {
          display: table-cell;
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
        
        :global(.modal-video-movie-wrap) {
          width: 100%;
          height: 0;
          position: relative;
          padding-bottom: 56.25%;
          background-color: #333;
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          -webkit-animation-duration: .3s;
          animation-duration: .3s;
          -webkit-animation-name: modal-video-inner;
          animation-name: modal-video-inner;
          transform: translate(0);
          transition: transform .3s ease-out;
        }
        
        :global(.modal-video-movie-wrap iframe) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        :global(.modal-video-close-btn) {
          position: absolute;
          z-index: 2;
          top: -35px;
          right: -35px;
          display: inline-block;
          width: 35px;
          height: 35px;
          overflow: hidden;
          border: none;
          background: transparent;
        }
        
        :global(.modal-video-close-btn:before) {
          transform: rotate(45deg);
        }
        
        :global(.modal-video-close-btn:after) {
          transform: rotate(-45deg);
        }
        
        :global(.modal-video-close-btn:after,.modal-video-close-btn:before) {
          content: "";
          position: absolute;
          height: 2px;
          width: 100%;
          top: 50%;
          left: 0;
          background: #fff;
          border-radius: 5px;
          margin-top: -6px;
        }
      `}</style>
                
            </>
          )
      }
    </>
  )
}
