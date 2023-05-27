"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-white transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">¿Cómo se usa?</h1>
            <p className="text-xl text-gray-600">
              {" "}
              El mejor todo en 1 para potenciar tu educación universitaria.{" "}
              <br /> Tan simple como hacer una buena pregunta y obtener una
              buena respuesta.
            </p>

            <div className="relative w-full h-full before:absolute before:inset-0 before:bg-gray-500 before:blur-md flex flex-col items-center justify-center mt-10">

              <img
                src="./images/captura.png"
                className="group-hover:-translate-y-0.5 btn-sm py-0 px-0 relative before:absolute before:inset-0 rounded-xl"
              />
              <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0"></div>
              {/* <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-200/0 via-violet-600 to-blue-400/0"></div> */}
            </div>

            <div className="mt-16 sm:mt-20 relative pb-12">
              <div
                className="hidden lg:block absolute top-4 left-32 right-32 mt-px h-0.5 bg-gray-200 -z-10"
                aria-hidden="true"
              ></div>
              <div className="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 sm:max-w-3xl lg:grid-cols-4 lg:max-w-none items-start">
                <div className="text-center">
                  <div className="w-9 h-9 bg-gray-900 border-2  text-white text-[15px] font-bold rounded-full inline-flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="font-cabinet-grotesk font-bold text-lg">
                    Regístrate
                  </h3>
                  <div className="text-gray-200">
                    Llena el formulario con todos los datos.
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-9 h-9 bg-gray-900 border-2  text-white text-[15px] font-bold rounded-full inline-flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="font-cabinet-grotesk font-bold text-lg">
                    Sube tus PDF's
                  </h3>
                  <div className="text-gray-200">
                    Todos los documentos que quieres consultar deben ser subidos
                    en formato PDF.
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-9 h-9 bg-gray-900 border-2 text-white text-[15px] font-bold rounded-full inline-flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="font-cabinet-grotesk font-bold text-lg">
                    Haz una pregunta
                  </h3>
                  <div className="text-gray-200">
                    Redacta tu pregunta en el chat
                  </div>
                </div>
                <div className="text-center ">
                  <div className="w-9 h-9 bg-gray-900 border-2  text-white text-[15px] font-bold rounded-full inline-flex items-center justify-center mb-3">
                    4
                  </div>
                  <h3 className="font-cabinet-grotesk font-bold text-lg">
                    Obtén todo lo que necesitas
                  </h3>
                  <div className="text-gray-200">Resume, chatea, cita</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
