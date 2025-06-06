import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

function About() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div
      id="about"
      className="lg:mt-0 min-h-screen w-screen flex flex-row flex-wrap scroll-mt-14"
    >
      <div className="w-full lg:w-1/2 text-teal-950 p-4 flex flex-col justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1> NOTRE HISTOIRE</h1>
          <hr className="w-1/6 bg-teal-950 h-2 mt-2" />
        </div>
        <p className="p-4">
          Créées en 1985 par Daniel Rozic et Philippe Duchêne sur les terres agricoles de la famille
          Rozic à Locunolé dans le Sud Finistère, les Pépinières de Judicarré
          sont spécialisées dans les végétaux d’ornement. Depuis plus de 30 ans,
          nous avons tissé des relations de confiance avec les professionnels du
          paysage, les jardineries, ainsi que les collectivités de la Région.
        </p>
        <h2 className="p-4">Livraisons dans toute la France.</h2>
        {hasWindow && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=e3OLFgOgmLY"
            width="80%"
            controls="true"
          />
        )}
      </div>
      <div className="hidden lg:h-screen h-1/2 lg:w-1/2 w-full lg:flex">
        <div className="h-screen w-1/2 relative">
          <Image
            src="/images/histoire5.jpg"
            alt="rangées de plantes dans la pépinière"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-screen w-1/2 relative">
          <Image
            src="/images/histoire2.jpg"
            alt="Intérieur d'une serre dans la pépinière"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="h-screen lg:w-1/2 w-screen p-4 hidden lg:flex relative">
        <Image
          src="/images/histoire3.jpg"
          alt="Intérieur d'une serre dans la pépinière"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:h-screen h-1/2 lg:w-1/2 w-full  flex flex-col justify-between p-4 items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1>UNE PRODUCTION DURABLE</h1>
          <hr className="w-1/6 bg-teal-950 h-2 mt-2" />
        </div>
        <div className="h-5/6 flex flex-col justify-around	items-center">
          <div className="flex flex-col lg:flex-row justify-around items-center w-full h-1/2 p-4">
            <div className="lg:w-2/5 h-11/12 flex justify-center items-center  ">
            <Image
                src="/certifications/plante-bleue.jpg"
                alt="logo certification plante bleue"
                width={100}
                height={100}
              />

            </div>
            <div className="lg:w-3/5">
              <h2>Certification Plante Bleue</h2>
              <p>
                Garantie d'une production respectueuse de l'environnement basée
                sur 7 critères:
              </p>
              <ul className="list-disc list-inside text-teal-950">
                <li>Gestion de l'irrigation</li>
                <li>Stratégie de fertilisation</li>
                <li> L'environnement de l'entreprise</li>

                <li>La gestion des déchêts</li>
                <li>L'engagement social</li>
              </ul>
            </div>
          </div>
         {/*
<div className="flex flex-col lg:flex-row justify-around items-center w-full h-1/2 p-4">
  <div className="w-2/5 h-11/12  flex justify-center items-center">
    <Image
      src="/certifications/fleurs-de-france.jpg"
      alt="logo certification fleur de france"
      width={130}
      height={130}
    />
  </div>

  <div className="lg:w-3/5">
    <h2>Certification Fleurs de France</h2>
    <p>Le signe de reconnaissance des végétaux produits en France.</p>
  </div>
</div>
*/}

        </div>
      </div>
      <div className="h-96 lg:h-screen w-full lg:w-1/2 text-teal-950 p-4 flex flex-col justify-around items-center bg-teal-950">
        <h3 className="font-sen font-bold  lg:leading-relaxed text-5xl lg:text-7xl text-white text-center">
          DÉCOUVREZ NOS NOMBREUSES VARIÉTÉS
        </h3>
        <a
          href="/varietes"
          className="bg-teal-900 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
        >
          Notre catalogue
        </a>
      </div>
      <div className="hidden lg:h-screen h-1/2 lg:w-1/2 w-full lg:flex relative">
        <Image
          src="/images/histoire4.jpg"
          alt="Intérieur d'une serre dans la pépinière"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default About;
