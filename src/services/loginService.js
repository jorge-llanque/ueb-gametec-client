import { ROUTES_URL } from "../constants/routes/routesUrl"
import { axiosWithAuth } from "../utils"

/**
 * Service that allows to manage Games.
 */
export const loginService = {
  login: async (params) => {
    const {data} = await axiosWithAuth().post(`${ROUTES_URL.API_URL_LOGIN}/Login`, params);
    localStorage.setItem('token', data.token);
    return data
  },
}
