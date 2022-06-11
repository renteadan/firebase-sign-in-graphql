

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { ProvideAuth } from 'src/components/use-auth';
interface AppProps { }

function Dashboard(props: AppProps) {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  return (
    <ProvideAuth>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome {user?.email}</p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    </ProvideAuth>
  );
}

export default Dashboard;
