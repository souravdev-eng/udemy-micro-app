import {combineReducers} from 'redux';
import {courseReducer} from './reducers/course.reducer';
import {userReducer} from './reducers/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
});
