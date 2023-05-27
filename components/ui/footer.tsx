import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="text-gray-700 bg-black body-font tails-selected-element">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <a
          href="#_"
          className="text-lg font-bold leading-none text-gray-50 select-none logo"
        >
          Cooper
        </a>
        <p className="mt-4 text-sm text-gray-50 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
          © 2023 Cooper. Todos los derechos reservados.
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://www.facebook.com/people/Cooper-Summaries/100092270560208/"
            className="text-gray-400 hover:text-gray-50"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://wa.link/4pu4yr"
            className="text-gray-400 hover:text-gray-50"
          >
            <span className="sr-only">WhatsApp</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
              fill-rule="evenodd"
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/tbalbini"
            className="text-gray-400 hover:text-gray-50"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

// {/* Top area: Blocks */}
// <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

// {/* 1st block */}
// <div className="sm:col-span-12 lg:col-span-3">
//   <div className="mb-2">
//     <Logo />
//   </div>
//   <div className="text-sm text-gray-600">
//     <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Términos</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Política de privacidad</a>
//   </div>
// </div>

// {/* 2nd block */}
// <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//   <h6 className="text-gray-800 font-medium mb-2">Products</h6>
//   <ul className="text-sm">
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</a>
//     </li>
//   </ul>
// </div>

// {/* 3rd block */}
// <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//   <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
//   <ul className="text-sm">
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a>
//     </li>
//   </ul>
// </div>

// {/* 4th block */}
// <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//   <h6 className="text-gray-800 font-medium mb-2">Company</h6>
//   <ul className="text-sm">
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
//     </li>
//     <li className="mb-2">
//       <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
//     </li>
//   </ul>
// </div>

// {/* 5th block */}
// <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
//   <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
//   <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
//   <form>
//     <div className="flex flex-wrap mb-4">
//       <div className="w-full">
//         <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
//         <div className="relative flex items-center max-w-xs">
//           <input id="newsletter" type="email" className="form-input w-full text-gray-500 px-3 py-2 pr-12 text-sm" placeholder="Ingresa tu email" required />
//           <button type="submit" className="absolute inset-0 left-auto" aria-label="Inscribete en la beta">
//             <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
//             <svg className="w-3 h-3 fill-current text-violet-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
//             </svg>
//           </button>
//         </div>
//         {/* Success message */}
//         {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
//       </div>
//     </div>
//   </form>
// </div>

// </div>

// {/* Bottom area */}
// <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

// {/* Social as */}
// <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
//   <li>
//     <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
//       <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//         <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
//       </svg>
//     </a>
//   </li>
//   <li className="ml-4">
//     <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
//       <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//         <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//       </svg>
//     </a>
//   </li>
//   <li className="ml-4">
//     <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
//       <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//         <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
//       </svg>
//     </a>
//   </li>
// </ul>

// {/* Copyrights note */}
// <div className="text-sm text-gray-600 mr-4">&copy; Cooper. Todos los derechos reservados.</div>

// </div>
