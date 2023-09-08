import React from "react";
import Image from "next/image";

function Welcome() {
  return (
    <main
      id="accueil"
      className="lg:h-screen h-96 w-screen flex justify-center items-center scroll-mt-14"
    >
      <div className="h-1/2 lg:h-full w-screen absolute">
        <div className="h-full w-full relative">
          <Image
            src="/images/welcome.jpg"
            alt="Image de fond représentant un olivier zoomé sur une rameau"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="max-w-full h-auto"
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </div>
      <div className=" h-2/3 w-1/2 z-10 mt-14">
        <div className="h-1/2 w-full flex items-center justify-center">
          <p className="text-white font-sen tracking-wide text-xl lg:text-3xl z-10 relative underline underline-offset-8">
            DEPUIS
          </p>
          <div className="h-full w-1/3 relative mx-2">
            <Image
              src="/logo/logo.png"
              alt="Logo image"
              layout="fill"
              objectFit="contain"
              className="max-w-full h-auto"
              priority={true}
            />
          </div>
          <p className="text-white font-sen tracking-wide text-xl lg:text-3xl  z-10 relative underline underline-offset-8">
            1985
          </p>
        </div>
        <div className=" h-1/2 w-full relative">
          <Image
            src="/logo/text-blanc.png"
            alt="Logo texte"
            layout="fill"
            objectFit="contain"
            className="max-w-full h-auto"
            priority={true}
          />
        </div>
      </div>
    </main>
  );
}

export default Welcome;
