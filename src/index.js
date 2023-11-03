import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import store from './redux/store';
import { UserProvider } from './components/userAccess/userContext';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </UserProvider>
  </React.StrictMode>,
);
