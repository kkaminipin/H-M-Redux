// import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Routers from './routes/index.jsx';

import { Provider } from 'react-redux';
import store from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Routers />
  </Provider>
  // </React.StrictMode>
);
