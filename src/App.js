import React from 'react';
import SuperHeroes from './views/SuperHeroes';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'

function App() {
  return (
    <div>
      <Provider store={store}>
        <SuperHeroes />
      </Provider>
    </div>
  );
}

export default App;