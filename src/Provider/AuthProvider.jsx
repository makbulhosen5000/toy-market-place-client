import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

    const AuthProvider = ({ children }) => {
      const [teddyBears, setTeddyBears] = useState([]);
      const [horses, setHorses] = useState([]);
      const [dinosaurs, setDinosaurs] = useState([]);
      const [loading, setLoading] = useState(true);

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
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
    };

export default AuthProvider;
