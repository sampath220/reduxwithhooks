import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux';
import Routes from './routes/Routes'

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
