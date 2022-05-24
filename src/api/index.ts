import { axiosApiInstance, authorizeUser, revoketoken } from './lib';
import config from '../config';

export const getUserByUsername = async (username: string) => {
  const url = `/${config.apiVersion}/users/${username}`;

  try {
    const { data } = await axiosApiInstance.get(url);
    return [null, data];
  } catch (error) {
    return [error];
  }
};

export { authorizeUser as authorize };

export { revoketoken };
