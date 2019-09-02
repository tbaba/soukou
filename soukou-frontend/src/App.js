import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AuthContainer from './containers/AuthContainer';
import reducer from './reducers';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AuthContainer />
      </div>
    </Provider>
  );
}

export default App;
