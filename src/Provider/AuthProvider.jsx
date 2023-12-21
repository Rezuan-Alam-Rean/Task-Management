import  { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confiq';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader]=useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoader(false)
         
        });
        return () => {
          return unsubscribe();
        };
      }, []);

// console.log(user);
    const createUser = (email, password) => {
      setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const updateUserData = (user, name,photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL:photo,
        })
          .then(() => {
            alert("Successfull");
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
      const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const logout = () => {
        setLoader(true);
        return signOut(auth);
      };
      const googleLogin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
      };
      const githubSignIn =(provider)=>{
        setLoader(true);
        return signInWithPopup(auth, provider)
      }
    const authInfo={createUser,user,loader,logout,updateUserData,login,googleLogin,setUser,githubSignIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;