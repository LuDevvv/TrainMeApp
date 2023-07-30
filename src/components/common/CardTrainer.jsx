import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CitasContext } from "../../context/CitasContext";
import { TrainersContext } from "../../context/TrainersContext";
import { parse, format } from "date-fns";
import { es } from "date-fns/locale";

export const CardTrainer = ({ trainers }) => {
  const { user } = useContext(AuthContext);
  const { addCita } = useContext(CitasContext);
  const { selectedTrainer, showForm, handleAgendarCita, setShowForm } =
    useContext(TrainersContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { WorkOutHour, WorkOutPlace, WorkOutDate } = Object.fromEntries(
      new window.FormData(e.target)
    );

    const { id: trainerId } = selectedTrainer;
    const { uid: userId } = user;

    const parsedTime = parse(WorkOutHour, "HH:mm", new Date(), {
      locale: es,
    });
    const WorkOutHourFormated = format(parsedTime, "hh:mm a", {
      locale: es,
    });

    try {
      await addCita({
        userId,
        trainerId,
        WorkOutPlace,
        WorkOutDate,
        WorkOutHourFormated,
      });

      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {trainers.map((trainer) => (
        <div key={trainer.id} className="rounded-lg">
          <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {trainer.name}
                </h3>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt={trainer.name}
                  src={
                    trainer?.imageUrl
                      ? trainer?.imageUrl
                      : "https://kmvn.in/Content/assets/images/avtar/1.jpg"
                  }
                  className="h-28 w-28 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <dl className="mt-6 grid gap-4 sm:gap-6 grid-cols-2">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  {trainer.specialty}
                </dt>
                <dd className="text-xs text-gray-500">Especialidad</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  {trainer.qualification}
                </dt>
                <dd className="text-xs text-gray-500">Calificacion</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  {trainer.age}
                </dt>
                <dd className="text-xs text-gray-500">Edad</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  {trainer.experience}
                </dt>
                <dd className="text-xs text-gray-500">Experiencia</dd>
              </div>
            </dl>
            <br />

            <button
              onClick={() => handleAgendarCita(trainer)}
              className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ms-4">
                Agender cita
              </span>
            </button>

            {showForm && selectedTrainer && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-white p-4">
                {/* Formulario flotante */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 mx-auto mb-0 mt-8 max-w-md"
                >
                  <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {selectedTrainer.name}
                      </h3>
                      <br />
                      <div className="hidden sm:block sm:shrink-0">
                        <img
                          alt={selectedTrainer.name}
                          src={
                            selectedTrainer?.imageUrl
                              ? selectedTrainer?.imageUrl
                              : "https://kmvn.in/Content/assets/images/avtar/1.jpg"
                          }
                          className="h-28 w-28 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>

                    <dl className="mt-6 grid gap-4 sm:gap-6 grid-cols-2">
                      <div className="flex flex-col-reverse">
                        <div className="flex flex-col-reverse">
                          <dt className="text-sm font-medium text-gray-600">
                            {selectedTrainer.qualification}
                          </dt>
                          <dd className="text-xs text-gray-500">
                            Calificacion
                          </dd>
                        </div>
                        <br />
                        <div className="flex flex-col-reverse">
                          <dt className="text-sm font-medium text-gray-600">
                            {selectedTrainer.specialty}
                          </dt>
                          <dd className="text-xs text-gray-500">
                            Especialidad
                          </dd>
                        </div>
                      </div>

                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          {selectedTrainer.experience}
                        </dt>
                        <dd className="text-xs text-gray-500">Experiencia</dd>
                      </div>
                    </dl>
                  </div>

                  <br />
                  <div>
                    <label
                      htmlFor="WorkOutPlace"
                      className="block text-sm font-medium text-gray-700 mt-2"
                    >
                      Lugar de encuentro
                    </label>
                    <br />
                    <input
                      type="text"
                      name="WorkOutPlace"
                      id="WorkOutPlace"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100" // Estilo de fondo gris
                      placeholder="Ingrese el lugar de encuentro"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="WorkOutDate"
                      className="block text-sm font-medium text-gray-700 mt-2"
                    >
                      Fecha
                    </label>
                    <br />

                    <input
                      type="date"
                      name="WorkOutDate"
                      id="WorkOutDate"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100" // Estilo de fondo gris
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="WorkOutHour"
                      className="block text-sm font-medium text-gray-700 mt-2"
                    >
                      Hora
                    </label>
                    <br />

                    <input
                      type="time"
                      name="WorkOutHour"
                      id="WorkOutHour"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-gray-100" // Estilo de fondo gris
                    />
                  </div>

                  <br />
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                      Agendar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
