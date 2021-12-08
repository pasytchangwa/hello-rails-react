import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Greeting from './Greeting';

import configureStore from '../configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
