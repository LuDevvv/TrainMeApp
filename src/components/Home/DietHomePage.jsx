export const DietHomePage = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Nuestros Entrenadores, Tu Guía hacia el Éxito.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              En TrainMe, nuestros entrenadores son más que expertos en fitness. 
              Son mentores apasionados que te apoyarán, te desafiarán y te motivarán 
              en cada paso del camino. Descubre a nuestros talentosos entrenadores 
              y encuentra al compañero perfecto para alcanzar tus metas. Juntos,
              daremos vida a tu mejor versión.
            </p>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                className="ml-auto"
                src="https://th.bing.com/th/id/OIP.25v5OvJUmwGyKSzDwGZ78QAAAA?pid=ImgDet&rs=1"
                alt=""
              />
              <br />
              <img
                className="ml-auto"
                src="https://th.bing.com/th/id/OIP.RfaMWdNtgBH2YNb75vw4fgHaE8?pid=ImgDet&rs=1"
                alt=""
              />

              

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
