export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-black pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-black transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-white transform -translate-y-1/2"></div>
        <div className="py-12 md:py-15">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pt-8 pb-12 md:pb-20">
            <h2 className="h2 mb-4">¿Qué lo hace especial?</h2>
            <p className="text-xl text-gray-600">
              Cooper.ai se destaca por su capacidad de transformar la manera en
              que interactúas con tus documentos PDF, brindándote una
              experiencia conversacional intuitiva y empoderándote con
              herramientas de búsqueda y citas textuales precisas.
            </p>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-violet-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-violet-900"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-violet-900"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug text-center tracking-tight mb-1">
                Interfaz de chat intuitiva y fácil de usar
              </h4>
              <p className="text-gray-600 text-center">
                Cuidadosamente diseñada para ofrecerte una navegación intuitiva
                y una interacción sin complicaciones.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-violet-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-violet-900"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug text-center tracking-tight mb-1">
                Potente procesamiento de lenguaje natural (NLP)
              </h4>
              <p className="text-gray-600 text-center">
                Respuestas precisas en tiempo real gracias a avanzadas técnicas
                de procesamiento de lenguaje.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-violet-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-violet-900"
                      d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286"
                    />
                    <path
                      className="stroke-current text-violet-900"
                      d="M36.571 32H40"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M24 32h3.429"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug text-center tracking-tight mb-1">
                Motor de búsqueda y citas textuales
              </h4>
              <p className="text-gray-600 text-center">
                Encuentra citas relevantes en tus documentos PDF con nuestro
                motor de búsqueda integrado.
              </p>
            </div>
          </div>
          {/* Items */}
          <section className="w-full py-10 mt-16 bg-black tails-selected-element">
            <div className="relative px-12 flex flex-col items-center justify-center w-full xl:px-0">
              <h2 className="h2 mb-4 text-center">
                Explora <span className="text-violet-600">(+)</span> ideas. Pasa por <span className="text-violet-600">(-)</span> páginas.
              </h2>
              <p className="text-xl text-gray-600 text-center">
                Ya sea que estés estudiando, borrando tus marcadores o
                simplemente explorando, Cooper te ayuda a encontrar y comprender
                rápidamente la información relevante.
              </p>
              <div className="flex flex-col items-center lg:flex-row">
                <div className="flex justify-center items-center w-full h-full mt-12 ">
                  <a href="/signin">
                    <button
                      className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 w-full px-8 py-4 bg-transparent text-center text-gray-50 border border-gray-50 rounded-full md:w-auto hover:bg-gray-50 hover:text-black transition-all"
                      data-primary="primary"
                      data-rounded="rounded-full"
                    >
                      ¡Probarlo!
                      <div className="ml-1 bg-gray-500 bg-opacity-25 text-[8px] leading-3 px-[2px] py-[2px] h-fit rounded-md">
                        ALPHA
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center mt-20">
                <img
                  src="./images/coop.svg"
                  alt="Cooper"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
