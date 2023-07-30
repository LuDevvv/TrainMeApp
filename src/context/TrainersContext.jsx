import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const TrainersContext = createContext();

export function useTrainerContext() {
  return useContext(TrainersContext);
}

export function TrainerProvider({ children }) {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const trainersCollection = collection(db, "trainers");
    const snapshot = await getDocs(trainersCollection);
    const trainersData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTrainers(trainersData);
  };

  const handleAgendarCita = (trainer) => {
    setSelectedTrainer(trainer);
    setShowForm(true);
  };

  const trainerContextValue = {
    selectedTrainer,
    showForm,
    handleAgendarCita,
    trainers,
    setShowForm,
  };

  return (
    <TrainersContext.Provider value={trainerContextValue}>
      {children}
    </TrainersContext.Provider>
  );
}
