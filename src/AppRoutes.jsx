import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { APP_ROUTES } from './constants';
import {
  Controls,
  Games,
  GamesAll,
  GamesAvailable,
  GamesRelease,
  GroupForm,
  Participants,
  Schedules
} from './pages';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Layout />}>
          <Route index element={<Games />} />
          <Route path={APP_ROUTES.GAMES} element={<Games />}>
            <Route index element={<GamesAll />} />
            <Route path={APP_ROUTES.GAMES_ALL} element={<GamesAll />} />
            <Route path={APP_ROUTES.GAMES_AVAILABLE} element={<GamesAvailable />} />
            <Route path={APP_ROUTES.GAMES_RELEASES} element={<GamesRelease />} />
          </Route>
          <Route path={APP_ROUTES.PARTICIPANTS} element={<Participants />} />
          <Route path={APP_ROUTES.PARTICIPANTS_GROUP_NEW} element={<GroupForm />} />
          <Route path={APP_ROUTES.SCHEDULING} element={<Schedules />} />
          <Route path={APP_ROUTES.CONTROLLERS} element={<Controls />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;