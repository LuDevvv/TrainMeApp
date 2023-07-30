import { Link } from 'react-router-dom'

export const BannerHomePage = () => {
  return (
    <section className="relative py-60 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
          alt=""
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Obten full acceso a TrainMe
          </h2>
          <p className="mt-4 text-base text-gray-200">
            ¿Estás listo para dar un paso adelante y alcanzar 
            tus metas de acondicionamiento físico de manera eficiente y emocionante?
            ¡Presiona el botón y comienza tu cambio hoy mismo con TrainMe!
          </p>

          <form action="#" method="POST" className="mt-8 lg:mt-12">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label htmlFor="email" className="sr-only"></label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                   
                  </div>
                  
                </div>
              </div>

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
          </form>
        </div>
      </div>
    </section>
  );
};
