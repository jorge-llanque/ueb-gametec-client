import { useEffect, useState } from 'react'
import { LOGIN_ACTIONS, QUERY_PARAMETER_NAMES } from '../constants/authorizationConstants';
import { UI } from '../constants/uiConstants';


export const Login = (props) => {
  const { action } = props;
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    switch (action) {
      case LOGIN_ACTIONS.LOGIN:
        Login(getReturnUrl());
        break;

      default:
        break;
    }
  }, []);

  const getReturnUrl = (state) => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get(QUERY_PARAMETER_NAMES.RETURN_URL);
    if (fromQuery && !fromQuery.startsWith(`${window.location.origin}/`)) {
      setMessage(UI.AUTH.ERROR.INVALID_RETURN_URL);
    }
    return ((state && state.returnUrl) || fromQuery || `${window.location.origin}/`);
  }

  if (message) {
    return <div>{message}</div>
  } else {
    switch (action) {
      case LOGIN_ACTIONS.LOGIN:
        return <div>{UI.AUTH.LOGIN.PROCESSING}</div>
      default:
        return <div></div>;
    }
  }
}
