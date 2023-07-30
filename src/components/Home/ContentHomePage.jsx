import { Link } from 'react-router-dom'

export const ContentHomePage = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative col-span-1">
            <h1 className="text-2xl font-bold text-black sm:text-6xl lg:text-7xl">
              Cambia tu cuerpo, transforma tu vida, elige
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#77b2ec]"></span>
                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  TrainMe.
                </h1>
              </div>
            </h1>


            <p className="mt-8 text-base text-black sm:text-xl">
            Bienvenido a TrainMe!, el programa revolucionario que te ayudará a 
            transformar tu vida y cuerpo de manera eficiente y emocionante. 
            Con nuestros expertos entrenadores y programas personalizados, 
            alcanzarás tus metas de acondicionamiento físico y te sentirás más fuerte 
            y saludable que nunca. ¡Únete a nosotros y comienza tu cambio hoy mismo!
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Link
                to="/homePresentation"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                role="button"
              >
                Comienza tu cambio!
              </Link>
            </div>
          </div>

          <div className="relative col-span-1 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover mix-blend-multiply"
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
