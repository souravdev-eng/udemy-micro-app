import React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from './src/routes/root.routes';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
