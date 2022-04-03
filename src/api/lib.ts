import axios from 'axios';
import {
  authorize,
  refresh,
  revoke,
  AuthorizeResult,
} from 'react-native-app-auth';
import { storeAuthData, getAuthData } from '../helpers';

const config = {
  clientId: 'c71337b66ddf283e6919ec3894ffca705d0263601227f579d50f7a04f99be4e1',
  clientSecret:
    '93c08c81311534ffe76880c083cbfa624ac3820bc1a29c00f35bea36c6a994f3',
  redirectUrl: 'com.myswiftycompanion://callback',
  scopes: ['public'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
    tokenEndpoint: 'https://api.intra.42.fr/oauth/token',
  },
};

export const authorizeUser = async (): Promise<AuthorizeResult> =>
  await authorize(config);

const refreshToken = async (refreshToken: string) =>
  await refresh(config, { refreshToken });

export const revoketoken = async (tokenToRevoke: string): Promise<void> =>
  await revoke(config, { tokenToRevoke });

export const axiosApiInstance = axios.create({
  baseURL: 'https://api.intra.42.fr',
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const auth = await getAuthData();
    config.headers = {
      Authorization: `Bearer ${auth.accessToken}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const oldAuth = await getAuthData();
      const newAuth = await refreshToken(oldAuth.accessToken);
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + newAuth.accessToken;
      storeAuthData(newAuth);
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);
