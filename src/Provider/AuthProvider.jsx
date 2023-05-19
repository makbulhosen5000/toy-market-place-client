import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      
      const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      };

      const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [teddyBears, setTeddyBears] = useState([]);
      const [horses, setHorses] = useState([]);
      const [dinosaurs, setDinosaurs] = useState([]);
      const [loading, setLoading] = useState(true);

      // sign up
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
      //sign in
      const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

      // sign out
      const logOut = () => {
        return signOut(auth);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
          //stop observing while unmounting
          return () => {
            return unsubscribe();
          };
        });
      });

      // for teddy bear toy
      useEffect(() => {
        setTimeout(() => {
          fetch("teddyBear.json")
            .then((res) => res.json())
            .then((data) => setTeddyBears(data))
            .catch((error) => console.log(error));
          setLoading(false);
        }, 4000);
      });
      // for Horse toy
      useEffect(() => {
        setTimeout(() => {
          fetch("horse.json")
            .then((res) => res.json())
            .then((data) => setHorses(data))
            .catch((error) => console.log(error));
          setLoading(false);
        }, 4000);
      });
      // for dinosaur toy
      useEffect(() => {
        setTimeout(() => {
          fetch("dinosaur.json")
            .then((res) => res.json())
            .then((data) => setDinosaurs(data))
            .catch((error) => console.log(error));
          setLoading(false);
        }, 4000);
      });

      const authInfo = {
        teddyBears,
        horses,
        dinosaurs,
        loading,
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };

export default AuthProvider;
