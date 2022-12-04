import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import { BackdropsGridContainer, CollectionLists, GameItem } from '../../components'
import { gamesService } from '../../services'


export const GamesAll = ({ theme }) => {
  const [pagination, setPagination] = useState({ pageSize: 10, page: 1 })
  const [collectionList, setCollectionList] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {

    setLoading(true)
    gamesService.getAll(pagination).then(data => {
      const dataFormated = formatToShow(data.data)
      setCollectionList(dataFormated)
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

    return mapped
  }

  return (
    <>
      {
        loading ? (
          <Spin />
        ) : (
          <BackdropsGridContainer theme={theme}>
            {collectionList.map((collection, idx) => (
              <CollectionLists title={collection.group} key={idx}>
                {collection.games.map((game, idx) => (
                  <GameItem game={game} theme={theme} key={idx} />
                ))}
              </CollectionLists>
            ))}
          </BackdropsGridContainer>
        )
      }
    </>
  )
}
