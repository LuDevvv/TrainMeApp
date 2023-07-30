import { CardTrainer } from "../common/CardTrainer";
import { Header } from "../layout/Header";
import { TrainersContext } from "../../context/TrainersContext";
import { useState, useContext } from "react";
import { Loader } from "../common/Loader";

export const TrainerListPage = () => {
  const { trainers } = useContext(TrainersContext);
  return (
    <div>
      <Header />
      <br />
      <br />
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Lista de Entrenadores
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            ¡Elige al entrenador perfecto para ti y comienza tu viaje hacia una
            vida más activa y enérgica hoy mismo!
          </p>
        </div>
      </div>
      <br />
      <br />

      <div
        className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto mt-4"
        style={{ width: "80%" }}
      >
        {trainers.length > 0 ? <CardTrainer trainers={trainers} /> : <Loader />}
      </div>
    </div>
  );
};
