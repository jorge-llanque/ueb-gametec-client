import { PlayCircleOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { GamesGrid } from '../../components'

const gameList = [
  {
    group: 'Juegos de Logica',
    games: [
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
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
        title: 'titleThree 2',
        subGroup: 'Facil'
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
        title: 'titleThree 3',
        subGroup: 'Facil'
      },
    ]
  },
  {
    group: 'Juegos Espaciales',
    games: [
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
      },
    ]
  },
  {
    group: 'Juegos de Razonamiento',
    games: [
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
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
        subGroup: 'Facil'
      },
    ]
  },
]


export const GamesAll = () => {

  return (
    <div>
      {
        gameList.map((collection, idx) => {
          return (
            <div key={idx}>
              <Divider orientation="left">{collection.group}</Divider>
              <GamesGrid gallery={collection.games} />
            </div>
          )
        })
      }
    </div>
  )
}
