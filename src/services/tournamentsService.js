import { ROUTES_URL } from "../constants/routes/routesUrl"
import { axiosWithAuth } from "../utils"
import { loadState } from "../utils/helpers/localStorage";

/**
 * Service that allows to manage Tournaments.
 */
export const tournamentsService = {
  getAllTournaments: async () =>{
    const response = await axiosWithAuth().get(`${ROUTES_URL.API_URL_TOURNAMENTS}/GetTournaments`,{
      headers: {
        'Authorization': `Bearer ${loadState().access_token}`
      }
    });
    return response
  },
  insertTournament: async (tournament) =>{
    const response = await axiosWithAuth().post(`${ROUTES_URL.API_URL_TOURNAMENTS}/Insert`,tournament,{
      headers: {
        'Authorization': `Bearer ${loadState().access_token}`
      }
    });
    return response
  },
}
