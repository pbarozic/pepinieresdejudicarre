import React from 'react';
import Image from 'next/image';

function Welcome() {
  return (
<main id="accueil" className="lg:h-screen w-screen flex justify-center scroll-mt-14">
     <div className="absolute h-1/2 lg:h-full top-14 w-screen z-0"> 
      <Image
        src="/images/welcome.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
<div className="h-1/2 lg:h-full pt-28 lg:pt-14 w-2/3 flex items-center justify-center z-1">
    <div className="h-2/3 w-screen flex flex-col items-center justify-center z-1">
        <div className="flex items-center mb-5">
        <p className="text-white text-3xl z-10 relative underline">DEPUIS</p>
         <Image src="/logo/logo.png" alt="Logo"   width={200} height={200} />
         <p className="text-white text-3xl z-10 relative underline">1985</p>
         </div>
         <Image src="/logo/text-blanc.png" alt="Logo" width={600} height={200}/>
        </div>
              </div>
              </main>
  );
}

export default Welcome;