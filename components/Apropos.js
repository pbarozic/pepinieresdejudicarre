import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player'
import { useState, useEffect} from 'react';

function Apropos() {
 const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
<div className="mt-14 h-screen w-screen flex">
<div className="h-screen w-1/2 text-teal-950 p-4 flex flex-col justify-between items-center">
<h1 className="text-bold text-4xl">NOTRE HISTOIRE</h1>
<hr className="w-1/4 bg-black h-2 mt-2" />
<p className="text-xl">Créées en 1985 par Daniel Rozic sur les terres agricoles de la famille Rozic à Locunolé dans le Sud Finistère, les Pépinières de Judicarré sont spécialisées dans les végétaux d’ornement.  Depuis plus de 30 ans, nous avons tissé des relations de confiance avec les professionnels du paysage, les jardineries, ainsi que les collectivités de la Région.
</p>
<h2 className="text-bold text-3xl">Livraisons dans toute la France.</h2>
<h2 className="text-bold text-3xl">Ouverture aux Particuliers sur rendez-vous.</h2>

{
        hasWindow && <ReactPlayer
          url='https://www.youtube.com/watch?v=e3OLFgOgmLY'
        />}
 </div>
<div className="h-screen w-1/2 flex">
<div className="h-screen w-1/2 relative">
<Image src="/images/histoire1.jpg" alt="photo de plantes en ligne"  layout='fill'
    objectFit='cover'/>
</div>
<div className="h-screen w-1/2 relative">
<Image src="/images/histoire2.jpg" alt="photo de serre" layout='fill'
    objectFit='cover' />
</div>
</div>
</div>
  );
}

export default Apropos;