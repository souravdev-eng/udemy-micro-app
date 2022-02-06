import {UserActionType} from '../utils/userAction.type';

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionType.LOGIN_REQUEST:
    case UserActionType.REGISTER_REQUEST:
      return {loading: true, error: null, currentUser: null};
    case UserActionType.LOGIN_REQUEST_SUCCESS:
    case UserActionType.REGISTER_REQUEST_SUCCESS:
      return {loading: false, error: null, currentUser: action.payload};
    case UserActionType.LOGIN_REQUEST_FAIL:
    case UserActionType.REGISTER_REQUEST_FAIL:
      return {loading: false, error: action.payload, currentUser: null};
    default:
      return state;
  }
};
