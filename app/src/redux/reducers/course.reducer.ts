import {CourseActionType} from '../utils/courseAction.type';

interface CourseState {
  loading: boolean;
  courses: any;
  error: string[] | string | null;
}

const INITIAL_STATE: CourseState = {
  loading: false,
  courses: [],
  error: null,
};

export const courseReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CourseActionType.GET_COURSE_REQUEST:
      return {loading: true, courses: [], error: null};
    case CourseActionType.GET_COURSE_REQUEST_SUCCESS:
      return {loading: false, courses: action.payload, error: null};
    case CourseActionType.GET_COURSE_REQUEST_FAIL:
      return {loading: false, courses: [], error: action.payload};
    default:
      return state;
  }
};
