import React from 'react';
import {useState} from 'react';
import './App.css';
import {GoogleAuthProvider, getAuth, signInWithPopup,
  User, onAuthStateChanged} from 'firebase/auth';

interface AppProps { }

function App(props: AppProps) {
  const [user, setUser] = useState<null | User>(null);
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      console.log(user.getIdToken());
    } else {
      setUser(null);
    }
  });
  return (
    <div className="App">
      {user ?
      (<div>
        <p>Your email is {user.email}</p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>) :
      (<div>
        <p>You are not logged in</p>
        <button onClick={() => signInWithPopup(auth, provider)}>Sign in</button></div>)}
    </div>
  );
}

export default App;
