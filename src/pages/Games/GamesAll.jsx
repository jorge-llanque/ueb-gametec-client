import { PlayCircleOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { GamesGrid } from '../../components'
import { Authorize } from '../../core'
import { gamesService } from '../../services'

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
  const [pagination, setPagination] = useState({ pageSize: 10, page: 1 })
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)



  useEffect(() => {

    setLoading(true)
    gamesService.getAll(pagination).then(data => {
      const dataFormated = formatToShow(data.data)
      setGames(dataFormated)
      setLoading(false)
    }).catch(err => {
      console.log(err);
      setLoading(false)
    })

  }, [])

  const formatToShow = (groups) => {
    let tree = groups.filter(group => {
      if (group.subGroups.length > 0) {
        group.subGroups = group.subGroups.filter(subGroup => {
          if (subGroup.games.length > 0) {
            return subGroup
          }
        })
        if (group.subGroups.length > 0) {
          return group
        }
      }
    })

    const mapped = tree[0].subGroups.map(subGroup => {
      return {
        group: subGroup.title,
        games: subGroup.games.map(game => {
          return {
            img: {
              url: game.multimedia.find(m => m.paR_SizeTypeId === 3).routeUrl,
              alt: game.title,
              style: {
                height: 180,
                objectFit: 'cover',
              }
            },
            title: game.title,
          }
        })
      }
    });

    console.log('tree', mapped);
    return mapped
  }

  return (
    <>
      {
        games.map((collection, idx) => {
          return (
            <div key={idx}>
              <Divider orientation="left">{collection.group}</Divider>
              <GamesGrid gallery={collection.games} />
            </div>
          )
        })
      }
    </>
  )
}
