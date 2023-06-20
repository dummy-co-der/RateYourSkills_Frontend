import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constant/User";

export const userlogin = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {};
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const userregistration = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {};
    case USER_REGISTER_SUCCESS:
      return { userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
