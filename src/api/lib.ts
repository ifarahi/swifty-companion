import axios from 'axios';
import {
  authorize,
  refresh,
  revoke,
  AuthorizeResult,
} from 'react-native-app-auth';
import { storeAuthData, getAuthData } from '../helpers';
import secrets from '../config/secrets';

const config = {
  clientId: secrets.CLIENT_ID,
  clientSecret: secrets.CLIENT_SECRET_ID,
  redirectUrl: 'com.myswiftycompanion://callback',
  scopes: ['public'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
    tokenEndpoint: 'https://api.intra.42.fr/oauth/token',
    revocationEndpoint: 'https://api.intra.42.fr/oauth/revoke',
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
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const oldAuth = await getAuthData();
      const newAuth = await refreshToken(oldAuth.refreshToken);
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + newAuth.accessToken;
      storeAuthData(newAuth);
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);
