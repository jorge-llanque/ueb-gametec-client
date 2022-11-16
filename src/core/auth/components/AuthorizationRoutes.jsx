import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import {LOGIN_ACTIONS} from "../constants/authorizationConstants";
import { Login } from "./Login";

export const AuthorizationRoutes = () => (
  <Routes>
    <Route element={<Layout/>}>
      <Route 
        path={LOGIN_ACTIONS.LOGIN} 
        element={<Login action={LOGIN_ACTIONS.LOGIN}/>}
      />
    </Route>
  </Routes>
)
