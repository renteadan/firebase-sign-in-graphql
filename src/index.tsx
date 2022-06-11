import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const firebaseConfig = {
  apiKey: 'AIzaSyDXAW6QG1rTgaVQIwS-sF7C7WeNFxvG4ws',
  authDomain: 'unique-badge-249119.firebaseapp.com',
  databaseURL: 'https://unique-badge-249119-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'unique-badge-249119',
  storageBucket: 'unique-badge-249119.appspot.com',
  messagingSenderId: '335559394869',
  appId: '1:335559394869:web:335662962c59350f7e937c',
  measurementId: 'G-PYJVFLTKCG',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
