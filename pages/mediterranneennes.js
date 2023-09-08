import PlantList from "../components/PlantList";
import Image from "next/image";

function Variété() {
    return (
        <div className='mt-14 h-screen flex lg:flex-row flex-wrap justify-center'>
    
        <div className='h-1/2 flex justify-center lg:mb-8'>
        <div className='h-1/2 w-full absolute z-0'>
          <div className='h-full w-full relative'>
            <Image src="/images/gamme-mediterranneenne.jpg" alt="photo de plantes en ligne" layout='fill'
              objectFit='cover' />
            <div className="absolute inset-0 bg-teal-950 opacity-40 z-0"></div>
          </div>
        </div>
        <div className='h-5/6 lg:h-full w-full lg:w-5/6 relative z-10 flex flex-col justify-around items-center'>
          <h3 className='text-4xl lg:text-7xl lg:leading-relaxed font-bold text-white text-center'>
            Découvrez notre gamme Méditérannéenne
          </h3>
        </div>
      </div>

<PlantList famille='Gamme Méditérannéenne et Arbustes de grande taille'/>
</div>
  
    );
  }
  
  export default Variété;