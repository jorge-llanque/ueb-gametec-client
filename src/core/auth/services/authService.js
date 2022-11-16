import axios from "axios";
import { UserManager } from "oidc-client";
import { BehaviorSubject } from "rxjs";
import { AUTH_PATHS } from "../constants/authorizationConstants";

class _AuthService {
  userManager = undefined;
  _user = null;
  _isAuthenticated = false;

  localDataLoaded = new BehaviorSubject(false);

  /**
   * Load the local data from store.
   */
  async loadLocalData(){
    await this.ensureUserManagerInitialized();
  }

  async ensureUserManagerInitialized() {
    if(this.userManager !== undefined){
      return;
    }

    const response = await axios.get(AUTH_PATHS.API_AUTHORIZATION_CLIENT_CONFIGURATION_URL);
    const {
      identityServerUri,
      clientId,
      postLoginRedirectUri,
      postLogoutRedirectUri,
      scope,
    } = response.data;

    this.userManager = new UserManager({
      authority: identityServerUri,
      client_id: clientId,
      redirect_uri: postLoginRedirectUri,
      post_logout_redirect_uri: postLogoutRedirectUri,
      response_type: 'code',
      scope,
    });

    this.userManager.events.addUserLoaded((_user) => this.updateState(_user));

  }
}

export const AuthService = new _AuthService();