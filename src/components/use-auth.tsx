import React, {useState, useEffect, useContext, createContext} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from 'firebase/auth';


const authContext = createContext({});
export function ProvideAuth({children}: {children: React.ReactNode}) {
  const auth = useProvideAuth();
  return (<authContext.Provider value={auth}>{children}</authContext.Provider>);
}
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<null | User>(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signin = async () => {
    const response = await signInWithPopup(auth, provider);
    setUser(response.user);
    return response.user;
  };
  const signout = async () => {
    await auth.signOut();
    setUser(null);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
