import axios from 'axios';
import {CourseActionType} from './../utils/courseAction.type';
import {API_URL} from '../../apis/endPoint';

export const getAllCourseAction = () => async (dispatch: any) => {
  dispatch({type: CourseActionType.GET_COURSE_REQUEST});
  try {
    const {data} = await axios.get(`${API_URL}/course`);
    dispatch({
      type: CourseActionType.GET_COURSE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: CourseActionType.GET_COURSE_REQUEST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
