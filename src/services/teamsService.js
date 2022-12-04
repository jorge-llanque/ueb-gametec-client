import { ROUTES_URL } from "../constants/routes/routesUrl"
import { axiosWithAuth } from "../utils"
import { loadState } from "../utils/helpers/localStorage";

/**
 * Service that allows to manage Teans.
 */
export const teamsService = {
  getAllTeams: async () =>{
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_TEAMS}/ListAll`,{
      headers: {
        'Authorization': `Bearer ${loadState().access_token}`
      }
    });
    return data
  },
  getAllPlayers: async () =>{
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_PLAYERS}/GetAllPlayers`);
    console.log("asf", data)
    return data
  },
  getAllStudents: async () =>{
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_LOGIN}/GetStudents`);
    return data.data
  },
  postStudent: async (params) =>{
    const {data} = await axiosWithAuth().post(`${ROUTES_URL.API_URL_LOGIN}/SignUp`, {...params});
    console.log(data)
    return data;
  },
  createTeam: async(values) => {
    const {data} = await axiosWithAuth().post(`${ROUTES_URL.API_URL_TEAMS}/Insert`,
    {...values},{
      headers: {
        'Authorization': `Bearer ${loadState().access_token}`
      },
    });
    return data
  },
  getGameById: async(id) =>{
    const {data} = await axiosWithAuth().get(`${ROUTES_URL.API_URL_GAMES}/${id}/GetById`)
    return data
  },
  
}
