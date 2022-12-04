import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"

import { APP_ROUTES, STATUSES } from "../../constants"
import AuthContext from "../../contexts/auth-context"
import { loginService } from "../../services"
import { loadState, saveState } from "../helpers/localStorage"

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    error: null,
    accessToken: "",
    status: STATUSES.IDLE,
  })
  const _navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const token = loadState() || {}
      if (!token.access_token) {
        console.log("token", token)
        _navigate(APP_ROUTES.LOGIN)
      }
      setState({ error: null, accessToken: token })
    })()
  }, [])

  const login = async (values) => {
    try {
      const response = await loginService.login(values)
      saveState({ access_token: response.token })
      const { access_token } = loadState()
      const { role } = jwt(access_token)
      if (role === "Student") {
        return _navigate(APP_ROUTES.STUDENTS)
      }

      if (role === "Teacher") {
        return _navigate(`/`)
      }
    } catch (error) {
      console.warn("[Login Error] => ", error.message)
      setState({
        status: STATUSES.REJECTED,
        error,
      })
    }
  }

  const logout = () => {
    try {
      saveState({ access_token: "" })
      _navigate("/login")
    } catch (error) {
      console.warn("[Logout Error] => ", error.message)
    }
  }

  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
