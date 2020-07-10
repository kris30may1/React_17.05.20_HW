import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './common/skeleton.css';
import './index.css';
import App from './App';
import store from './store';
import { fetchUsers } from './store/actions';

store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

