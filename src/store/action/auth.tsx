import { LOGIN } from '../reducers/actions';

export const userLogin = (user: any) => ({
  type: 'LOGIN',
  payload: user
});
