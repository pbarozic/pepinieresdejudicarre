import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

function Catalogue() {
  return (
    <div className="h-min-screen w-screen flex flex-wrap">
      <div className="hidden h-screen w-screen lg:w-1/2 lg:flex items-center justify-center relative">
        <Image
          src="/images/red-plant.jpg"
          alt="photo d'une plante avec fleur rouge'"
          layout="fill"
          priority={true}
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-teal-950 opacity-30 z-0"></div>

        <h3 className="relative font-sen font-bold text-white lg:text-7xl text-6xl z-1 mx-6 pl-4">
          Plus de 100 nouvelles variétés cette saison
        </h3>
      </div>
      <div className="h-min-screen lg:w-1/2 w-full  text-teal-950 pt-14 p-4 lg:pt-6 flex flex-col flew-wrap">
        <div className="w-full flex flex-col justify-center items-center">
          <h1> NOUVEAU CATALOGUE</h1>
          <hr className="w-1/6 bg-teal-950 h-2 mt-2" />
        </div>
        <div className="flex flex-col lg:flex-row h-full w-full">
          <div className="lg:w-1/2 flex flex-col justify-between items-center pl-2 pr-6 py-4 lg:py-14">
            <p className="py-2">
              Notre nouveau catalogue 2022 - 2024, destiné aux professionnels du
              métier, est enfin prêt ! Il contient les tarifs de nos 1500
              variétés, dont 100 nouvelles variétés.
            </p>

            <p className="py-2">
              Vous y trouverez l'ensemble de nos plantes : Arbres et Arbustes,
              Plantes de Terre de Bruyère, Plantes Grimpantes, Fougères,
              Bambous, Graminées, Vivaces, Arbustes Fruitiers, Plantes
              Méditérrannéennes...
            </p>

            <p className="py-2">
              N'hésitez pas à nous envoyer un mail ou à nous appeler si vous
              souhaitez recevoir notre nouveau catalogue.
            </p>

            <a
              href="#contact"
              className="bg-teal-950 hover:bg-teal-900 text-white font-bold mt-4 py-2 px-4 rounded cursor-pointer"
            >
              Contactez-nous
            </a>
          </div>
          <div className="px-2 w-full lg:w-1/2 h-96 lg:h-full relative">
            <Image
              src="/images/catalogue.jpg"
              alt="photo de la couverture du catalogue 2022-2023 de la pépinière"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
