import axios from "axios";

/**
 * Creates a new instance of axios but adds the authentication header with the access token.
 * @returns Axios instance with authentication header.
 */
export function axiosWithAuth() {
  const axiosInstance = axios.create();
  //Implement Authentication for header
  //...

  return axiosInstance;
}
