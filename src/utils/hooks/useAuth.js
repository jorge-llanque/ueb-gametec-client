import { useContext } from 'react'
import { STATUSES } from '../../constants';
import AuthContext from '../../contexts/auth-context'

const useAuth = () => {
  const {state, login, logout} = useContext(AuthContext) || {};
  const isPending = state === STATUSES.PENDING;
  const isAuthenticated = state === STATUSES.RESOLVED;

  return {
    ...state,
    login,
    logout,
    isPending,
    isAuthenticated,
  }
}

export default useAuth