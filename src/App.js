import React from 'react';
import SuperHeroes from './views/SuperHeroes';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
  return (
    <Provider store={store}>
      <div>
        <SuperHeroes />
      </div>
    </Provider>
  );
}

export default App;
