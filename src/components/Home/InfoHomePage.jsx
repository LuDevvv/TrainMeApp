export const InfoHomePage = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Descubre Nuestros 
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
              <span className="relative"> Programas Personalizados </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
            <img
              className="w-full mx-auto sm:max-w-xs"
              src="https://th.bing.com/th/id/OIP.pbNyUo0UYm8fbH8hok41DAHaE7?pid=ImgDet&rs=1"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Explora nuestros programas y comienza tu transformación.
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              En TrainMe, entendemos que cada persona es única y tiene objetivos 
              diferentes. Es por eso que ofrecemos una variedad de programas 
              personalizados, diseñados para ayudarte a alcanzar tus metas específicas. 
              Ya sea que desees perder peso, aumentar masa muscular o mejorar tu bienestar 
              general, tenemos el programa perfecto para ti..
            </p>
            
          </div>
          
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
        <div>
            <img
              className="w-full mx-auto sm:max-w-xs"
              src="https://www.fitnessmagnet.com/wp-content/uploads/2017/11/10-Ernahrungsregeln-fur-Anfanger.jpg"
              alt=""
            />
            </div>
        <div>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">
              Descubre Nuestros Programas Personalizados para Cada Objetivo.
            </h3>
            
            <p className="mt-4 text-lg text-gray-700">
              En TrainMe, creemos que todos tienen metas únicas y merecen programas 
              personalizados que se adapten a sus necesidades. Ya sea que busques 
              perder peso, mejorar tu fuerza o simplemente llevar un estilo de 
              vida más saludable, nuestros programas están diseñados para que 
              alcances el éxito. ¡Descubre nuestros programas ahora y comienza a 
              transformar tu cuerpo y mente!
            </p> 
          </div>
        </div>
      </div>
    </section>
  );
};
