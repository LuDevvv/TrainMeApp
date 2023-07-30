import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

export const CitasContext = createContext();

export function useCitasContext() {
  return useContext(CitasContext);
}

export function CitasProvider({ children }) {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const citasCollection = collection(db, "citas");
    const snapshot = await getDocs(citasCollection);
    const citasData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCitas(citasData);
    // const unsubscribe = onSnapshot(q, (snapshot) => {
    //   const citasData = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setCitas(citasData);
    // });
  };

  const addCita = async (citaData) => {
    try {
      const citasCollection = collection(db, "citas");
      await addDoc(citasCollection, citaData);
    } catch (error) {
      console.error("Error adding cita:", error);
    }
  };

  const citasContextValue = {
    citas,
    addCita,
  };

  return (
    <CitasContext.Provider value={citasContextValue}>
      {children}
    </CitasContext.Provider>
  );
}
