import { ROUTES_URL } from "../constants/routes/routesUrl"
import { axiosWithAuth } from "../utils"
import { loadState } from "../utils/helpers/localStorage";

/**
 * Service that allows to manage Games.
 */
export const gamesService = {
  getAllGame: () => axiosWithAuth().get(`${ROUTES_URL.API_URL_GAMES}/ListAll`),
  getAvailableGames: async () =>{
    const response = await axiosWithAuth().get(`${ROUTES_URL.API_URL_GAMES}/GetMyGames`, {
      headers: {
        'Authorization': `Bearer ${loadState().access_token}`
      }});
    return response.data
  },
  getPagedGames: async (inv) => {
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_GAMES}/ListAllPaged?PageSize=${inv.pageSize}&Page=${inv.page}`)
    return data
  },
  getGameById: async(id) =>{
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_GAMES}/${id}/GetById`)
    return data
  },
  getAll: async() => {
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_GROUPS}/ListGroupsWithSubgroupsWithGames`)
    return data
  }
}
