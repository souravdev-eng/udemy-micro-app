import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './actions/user.action';

const rootReducer = combineReducers({
  user: userSlice,
});

export default configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
