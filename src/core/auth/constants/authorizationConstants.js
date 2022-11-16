const PREFIX = '/auth';
const HOST_URI = process.env.REACT_APP_BACKEND_URI;

export const QUERY_PARAMETER_NAMES = {
  RETURN_URL: 'ReturnUrl',
  MESSAGE: 'message',
};

export const AUTH_ERRORS = {
  UNAUTHORIZED: 'unauthorized',
}

export const LOGIN_ACTIONS = {
  LOGIN: 'login',
};

export const AUTH_PATHS = {
  AUTH: `${PREFIX}/*`,
  UNAUTHORIZED: `${PREFIX}/${AUTH_ERRORS.UNAUTHORIZED}`,
  LOGIN: `${PREFIX}/${LOGIN_ACTIONS.LOGIN}`,
  API_AUTHORIZATION_CLIENT_CONFIGURATION_URL: `${HOST_URI}${PREFIX}/config`,
};
