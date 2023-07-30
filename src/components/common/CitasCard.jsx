import { useState, useEffect } from "react";

export const CitasCard = ({ citas, trainers }) => {
  const [filteredTrainers, setFilteredTrainers] = useState([]);

  const filterTrainersByCitas = () => {
    const trainersIds = citas.map((cita) => cita?.trainerId);
    const filtered = trainers.filter((trainer) =>
      trainersIds.includes(trainer?.id)
    );
    setFilteredTrainers(filtered);
  };

  // Filtrar los entrenadores cuando las citas se actualicen
  useEffect(() => {
    filterTrainersByCitas();
  }, [citas]);

  return (
    <>
      {filteredTrainers.map((trainer) => {
        const cita = citas.find((cita) => cita?.trainerId === trainer?.id);
        const formattedDate = new Date(cita?.WorkOutDate).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        const formattedTime = new Date(
          `${cita?.WorkOutDate} ${cita?.WorkOutHourFormated}`
        ).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        return (
          <article
            key={cita?.id}
            className="hover:animate-background relative rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div className="absolute top-5 right-10">
              <img
                src={
                  trainer?.imageUrl ||
                  "https://kmvn.in/Content/assets/images/avtar/1.jpg"
                }
                alt={trainer?.name}
                className="h-28 w-28 rounded-full object-cover shadow-sm"
              />
            </div>

            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <time
                datetime={cita?.WorkOutDate}
                className="block text-xs text-gray-500"
              >
                {formattedDate} - {formattedTime}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  {trainer?.name}
                </h3>
              </a>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  {trainer?.specialty}
                </span>

                <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-xs text-green-600">
                  {trainer?.qualification}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
