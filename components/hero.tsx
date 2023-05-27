import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import BackedByComponent from "./backedby";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#737373" offset="0%" />
              <stop stopColor="#0a0a0a" offset="77.402%" />
              <stop stopColor="#0a0a0a" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div data-aos="zoom-out">
              <div className="inline-flex relative before:absolute before:animate-pulse before:inset-0 before:bg-violet-300 before:blur-md mb-6 group ">
                <a
                  className="group-hover:-translate-y-0.5 btn-sm py-0.5 text-white hover:text-white transition duration-150 ease-in-out [background:linear-gradient(theme(colors.gray.950),_theme(colors.gray.950))_padding-box,_linear-gradient(theme(colors.gray.800),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:pointer-events-none shadow"
                  href="/signin"
                >
                  <span className="relative inline-flex items-center font-mono text-xs ">
                    <span className=" text-gray-500 transition-transform duration-150 ease-in-out mr-1">
                      $
                    </span>{" "}
                    Bienvenido a @Cooper.ai
                  </span>
                </a>
              </div>
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Tu copiloto en la universidad
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-400">
                Chatea, resume y practica
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-white-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Todas tus lecturas en un solo lugar.
                <br />
                Una experiencia de aprendizaje como nunca antes la habías
                vivido.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-black bg-white hover:bg-neutral-300 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/signin"
                  >
                    ¡Probarlo!
                    <div className="ml-1 bg-gray-500 bg-opacity-25 text-[8px] leading-3 px-[2px] py-[2px] h-fit rounded-md">
                      ALPHA
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7064006925935357952/"
                  >
                    Lee más
                  </a>
                </div>
              </div>

              <div data-aos="zoom-out">
                <div className="inline-flex relative group ">
                  <a
                    className="group-hover: text-white hover:text-white"
                    href="https://buildspace.so/"
                  >
                    <span className="relative inline-flex items-center font-mono text-xs ">
                      <div className="w-full sm:w-auto sm:ml-4 text-center -mt-1">
                        <BackedByComponent />
                      </div>
                    </span>
                  </a>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video_final.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div>
                <div className="mt-8 flex flex-row items-center justify-center lg:justify-start">
                    <div className="flex items-center text-gray-50 transform font-medium uppercase text-xs sm:px-0 text-center sm:text-xs rounded-xl leading-tight">
                      <span className="">Backed BY</span>
                    </div>
                    <div className="ml-2 flex items-center justify-start">
                      <img
                        src="./images/buildspace.svg"
                        className="h-6"
                        alt="Buildspace Logo"
                      />
                      <span className="ml-2 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent sm:inline-block text-sm font-semibold">
                        Buildspace
                      </span>
                    </div>
                  </div>
                </div> */
}
