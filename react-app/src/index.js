import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import ContextProvider from './context/DataContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider >
        <App />
        </ContextProvider >
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
