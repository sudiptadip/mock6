import { SIGNOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./action.type";


const signInData = {
  userData: {},
  token: "",
  isAuth: false,
  isLooding: false,
  isError: false,
};

export const AuthReducer = (state = signInData, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case SIGNUP_SUCCESS:
          return {
            ...state,
            isLooding: false,
            token: payload.username,
            userData: payload,
          }
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    case SIGNOUT:
      return {
        ...state,
        userData: {},
        token: "",
        isAuth: false,
        isLooding: false,
        isError: false,
      };
    default:
      return state;
  }
};