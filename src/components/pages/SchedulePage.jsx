import { Header } from "../layout/Header";
import { useContext } from "react";
import { CitasContext } from "../../context/CitasContext";
import { AuthContext } from "../../context/AuthContext";
import { CitasCard } from "../common/CitasCard";
import { TrainersContext } from "../../context/TrainersContext";
import { Loader } from "../common/Loader";

export const SchedulePage = () => {
  const { citas } = useContext(CitasContext);
  const { user } = useContext(AuthContext);
  const { trainers } = useContext(TrainersContext);

  const userCitas = citas.filter((cita) => cita?.userId === user?.uid);

  return (
    <>
      <Header />

      <br />
      <br />
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Lista de Citas
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Explora tus próximas citas agendadas con nuestros entrenadores
            altamente calificados.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div
        className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto mt-4"
        style={{ width: "80%" }}
      >
        {trainers.length > 0 ? (
          <CitasCard citas={userCitas} trainers={trainers} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
