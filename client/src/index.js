import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
// import './index.css';
import App from './App';
import store from "./store/store";

import axios from 'axios';
// https://stackoverflow.com/questions/71019949/dotenv-issues-error-with-create-react-app-react-scripts
// import dotenv from "dotenv";
// dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


