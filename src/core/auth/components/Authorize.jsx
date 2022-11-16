import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_PATHS, QUERY_PARAMETER_NAMES } from "../constants/authorizationConstants";
import { AuthService } from "../services/authService";
import { Subscription } from 'rxjs';


export const Authorize = ({
  children,
  redirectWhenUnauthorized,
  resource,
  screenName,
  onAuthorized
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectUri, setRedirectUri] = useState('')
  const [_isLocalDataLoaded, _setIsLocalDataLoaded] = useState(false);
  const [_isAuthenticated, _setIsAuthenticated] = useState(false);
  const [_isAuthorized, _setIsAuthorized] = useState(false)

  if (redirectWhenUnauthorized === undefined) {
    redirectWhenUnauthorized = true;
  }

  /**
   * Allows to redirect to Unauthorized page.
   */
  const redirectToUnauthorized = () => {
    navigate(AUTH_PATHS.UNAUTHORIZED);
  };

  if (!screenName) {
    redirectToUnauthorized();
  }

  // When the component did mount.
  useEffect(() => {
    // const returnUrl = `${window.location.protocol}//${window.location.host}${location.pathname}${window.location.search}${window.location.hash}`;
    // const redirectUrl = `${AUTH_PATHS.LOGIN}?${QUERY_PARAMETER_NAMES.RETURN_URL}=${encodeURIComponent(returnUrl)}`;

    // setRedirectUri(redirectUrl);

    // // Load local data.
    // const subscription = AuthService.localDataLoaded.subscribe(
    //   async (isLocalDataLoaded) => {
    //     if (!isLocalDataLoaded) {
    //       await AuthService.loadLocalData();
    //     } else if (!_isLocalDataLoaded) {
    //       _setIsLocalDataLoaded(true);
    //     }
    //   }
    // );

    // return () => {
    //   subscription.unsubscribe();
    // };

    let isAuthenticated = localStorage.getItem('token') ? true : false;

    if (!isAuthenticated) {
      navigate('/login');
    }
    _setIsAuthenticated(isAuthenticated);

  }, []);

  // When local data is loaded.
  // useEffect(() => {
  //   const subscription = new Subscription();

  //   if (_isLocalDataLoaded) {
  //     subscription.add(
  //       AuthService.isAuthenticatedChanges.subscribe((isAuthenticated) => {
  //         if (!isAuthenticated) {
  //           navigate(redirectUri);
  //         } else {
  //           _setIsAuthenticated(isAuthenticated);
  //         }
  //       })
  //     );
  //   }

  //   return () => {
  //     subscription.unsubscribe();
  //   }
  // }, [_isLocalDataLoaded]);

  // When user is authenticated.
  // useEffect(() => {
  //   if (_isAuthenticated) {
  //     // Validate if user has authorization to access the resource.
  //     const isAuthorized = true // .... change
  //     if (!isAuthorized && redirectWhenUnauthorized) {
  //       redirectToUnauthorized();
  //     }

  //     _setIsAuthorized(isAuthorized);

  //     if (isAuthorized && typeof onAuthorized === 'function') {
  //       onAuthorized();
  //     }
  //   }

  // }, [_isAuthenticated, resource, screenName]);

  // if (!_isAuthenticated || !_isAuthorized) {
  //   return null;
  // }

  return <>{children}</>
}

export default Authorize;