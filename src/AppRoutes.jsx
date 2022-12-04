import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LayoutForParticipants } from './components';
import { APP_ROUTES } from './constants';
import { AUTH_PATHS } from './core';
import {
  Controls,
  DefaultView,
  GameDetails,
  Games,
  GamesAll,
  GamesAvailable,
  GamesRelease,
  GroupForm,
  Login,
  Participants,
  ParticipantsList,
} from './pages';
import { Toourrnaments } from './pages/Tournaments/Toourrnaments';
import AuthProvider from './utils/hocs/AuthProvider';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Layout />}>
            <Route index element={<DefaultView />} />
            <Route path={APP_ROUTES.GAMES} element={<Games />}>
              <Route index path={APP_ROUTES.GAMES_ALL} element={<GamesAll />} />
              <Route path={APP_ROUTES.GAMES_AVAILABLE} element={<GamesAvailable />}>
                <Route path={APP_ROUTES.GAME_DETAILS} element={<GameDetails />} />
              </Route>
              <Route path={APP_ROUTES.GAMES_RELEASES} element={<GamesRelease />} />
            </Route>
            <Route path={APP_ROUTES.PARTICIPANTS} element={<Participants />} />
            <Route path={APP_ROUTES.PARTICIPANTS_GROUP_NEW} element={<GroupForm />} />
            <Route path={APP_ROUTES.PARTICIPANTS_LIST} element={<ParticipantsList />} />
            <Route path={APP_ROUTES.SCHEDULING} element={<Toourrnaments />} />
            <Route path={APP_ROUTES.CONTROLLERS} element={<Controls />} />
          </Route>
          <Route path={AUTH_PATHS.AUTH} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.STUDENTS} element={<LayoutForParticipants />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes;