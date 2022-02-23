import axios from 'axios';
import {API_URL} from '../../apis/endPoint';
import {UserActionType} from '../utils/userAction.type';

export const userLoginAction =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({type: UserActionType.LOGIN_REQUEST});

    try {
      const {data} = await axios.post(
        `${API_URL}/users/signin`,
        {email, password},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      dispatch({
        type: UserActionType.LOGIN_REQUEST_SUCCESS,
        payload: data.user,
      });
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const err = error.response.data.errors;
        dispatch({
          type: UserActionType.LOGIN_REQUEST_FAIL,
          payload: err,
        });
      }
    }
  };

export const userRegisterAction =
  (name: string, email: string, password: string, passwordConform: string) =>
  async (dispatch: any) => {
    dispatch({type: UserActionType.REGISTER_REQUEST});

    try {
      const {data} = await axios.post(
        `${API_URL}/users/signup`,
        {name, email, password, passwordConform},
        {
          headers: {
            'Content-Type': 'application/json',
            Host: 'udemy.com',
          },
        },
      );
      dispatch({
        type: UserActionType.REGISTER_REQUEST_SUCCESS,
        payload: data.user,
      });
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data.errors;
        dispatch({
          type: UserActionType.REGISTER_REQUEST_FAIL,
          payload: err,
        });
      }
    }
  };
