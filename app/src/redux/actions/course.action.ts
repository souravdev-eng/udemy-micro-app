import axios from 'axios';
// import RNFetchBlob from 'rn-fetch-blob';
import {CourseActionType} from './../utils/courseAction.type';
import {API_URL} from '../../apis/endPoint';

// RNFetchBlob.config({
//   trusty: true,
// });

export const getAllCourseAction = () => async (dispatch: any) => {
  dispatch({type: CourseActionType.GET_COURSE_REQUEST});
  try {
    const {data} = await axios.get(`${API_URL}/course`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: CourseActionType.GET_COURSE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    console.log(error.message);
    if (error.response) {
      const err = error.response.data.errors;
      dispatch({
        type: CourseActionType.GET_COURSE_REQUEST_FAIL,
        payload: err,
      });
    }
  }
};
