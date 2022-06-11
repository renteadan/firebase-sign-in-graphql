import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
interface AppProps { }
function Login(props: AppProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <input onChange={(e) => setEmail(e.target.value)}></input>
      <input onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={async () => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(res.user);
      }}>Log in</button>
    </div>
  );
}

export default Login;
