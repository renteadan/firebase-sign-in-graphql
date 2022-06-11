import React from 'react';
import {useState} from 'react';
import './App.css';
import {GoogleAuthProvider, getAuth, signInWithPopup,
  User, onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

interface AppProps { }

function App(props: AppProps) {
  const [user, setUser] = useState<null | User>(null);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      navigate('/dashboard');
    } else {
      setUser(null);
    }
  });
  return (
    <div className="App">
      <div>
        <p>You are not logged in</p>
        <button onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</button>
        <button onClick={() => navigate('/login')}>Sign in with Email</button>
      </div>
    </div>
  );
}

export default App;
