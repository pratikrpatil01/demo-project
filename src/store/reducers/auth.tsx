// action - state management
import { any } from 'prop-types';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  FORGOTPASSWORD,
  VERIFYEMAIL,
  RESETPASSWORD
} from './actions';

// initial state
export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: any,
  token: any
};

// ==============================|| AUTH REDUCER ||============================== //

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case 'LOGIN': {
      const { data, tokenInfo } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user: data,
        token: tokenInfo?.token
      };
    }
    case FORGOTPASSWORD: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case VERIFYEMAIL: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case RESETPASSWORD: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
