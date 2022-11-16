import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
} from './pages';
import { Toourrnaments } from './pages/Tournaments/Toourrnaments';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
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
          <Route path={APP_ROUTES.SCHEDULING} element={<Toourrnaments />} />
          <Route path={APP_ROUTES.CONTROLLERS} element={<Controls />} />
        </Route>
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={AUTH_PATHS.AUTH} />
        <Route path='/students/home' element={<LayoutForParticipants />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;