import React, { useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

function Varietes() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const varietiesArray = [
    {
      title: "Arbres et Arbustes",
      imgSrc: "/images/arbres-et-arbustes.jpg",
      path: "/arbres-arbustes"
    },
    {
      title: "Plantes de Terre de Bruyère",
      imgSrc: "/images/terres-bruyere.jpg",
      path: "/terres-bruyeres"

    },
    {
      title: "Plantes grimpantes",
      imgSrc: "/images/plantes-grimpantes.jpg",
      path: "/plantes-grimpantes"

    },
    {
      title: "Fougères",
      imgSrc: "/images/fougeres.jpg",
      path: "/fougeres"

    },
    {
      title: "Bambous",
      imgSrc: "/images/bambou.jpg",
      path: "/bambous"

    },
    {
      title: "Graminées",
      imgSrc: "/images/graminees.jpg",
      path: "/graminees"

    },
    {
      title: "Vivaces",
      imgSrc: "/images/vivaces.jpg",
      path: "/vivaces"

    },
    {
      title: "Arbustes Fruitiers",
      imgSrc: "/images/arbustes-fruitiers.jpg",
      path: "/arbres-fruitiers"

    },
    {
      title: "Arbres petits conteneurs",
      imgSrc: "/images/petits-conteneurs.jpg",
      path: "/arbres-petits-conteneurs"

    },
  ];

  function VarieteSquares({ text, imgSrc, path }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (
      <a href={path}
        className={`lg:w-1/3 w-full relative cursor-pointer ${text=='Nouveautés' && 'lg:hidden'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='m-4'>
          <div className='aspect-ratio-square w-full h-full relative z-0' style={{ paddingBottom: "100%" }}>
            <h3 className={`absolute top-0 left-0 text-center w-full h-full text-5xl text-white p-4 flex items-center justify-center z-20 ${hovered ? 'font-bold' : ''}`}>
              {text}
            </h3>
            <Image src={imgSrc} alt={text} layout='fill' objectFit='cover' className='z-0' />
            <div className={`absolute inset-0 bg-teal-950 ${hovered ? 'opacity-10' : 'opacity-20'} z-0`}></div>
          </div>
        </div>
      </a>
    );
  }


  return (
    <div className='mt-14 h-screen flex lg:flex-row flex-wrap justify-center'>

      <div className='h-1/2 lg:h-4/6 flex justify-center lg:mb-8'>
        <div className='h-1/2 lg:h-4/6 w-full absolute z-0'>
          <div className='h-full w-full relative'>
            <Image src="/images/banner-variete.jpg" alt="photo de plantes en ligne" layout='fill'
              objectFit='cover' />
            <div className="absolute inset-0 bg-teal-950 opacity-40 z-0"></div>
          </div>
        </div>
        <div className='h-5/6 lg:h-full w-full lg:w-5/6 relative z-10 flex flex-col justify-around items-center'>
          <h3 className='text-4xl lg:text-7xl lg:leading-relaxed font-bold text-white text-center'>
            DE NOMBREUSES VARIÉTÉS POUR CORRESPONDRE À TOUS VOS BESOINS
          </h3>
          <a href="/toutes-varietes" className="bg-slate-100 hover:bg-white text-teal-950 font-bold py-2 px-4 rounded cursor-pointer">
              Découvrir
            </a>

        </div>
      </div>

      <a href="/nouveautes"
        className='hidden h-1/3 w-full mb-4 lg:flex justify-center cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className='h-1/3 w-full px-8 absolute z-0'>
          <div className='h-full w-full relative'>
            <Image src="/images/nouveautes-banner.jpg" alt="photo de plantes en ligne" layout='fill' objectPosition="50% 7%" objectFit='cover' />
            <div className={`absolute inset-0 bg-teal-950 ${hovered ? 'opacity-10' : 'opacity-20'} z-0`}></div>

            <div className="absolute inset-0 bg-teal-950 opacity-30 z-0"></div>
          </div>
        </div>
        <div className='h-full w-11/12 relative z-10 flex flex-col justify-around items-center'>
          <h3 className='pb-10 text-6xl font-bold text-white text-center'>
            Découvrez nos nouveautés        </h3>
        </div>
      </a>

      <div className='h-min-screen h-full w-full lg:mx-4 flex lg:flex-row justify-center items-center flex-wrap'>
      <VarieteSquares
          key={32} 
          text="Nouveautés"
          imgSrc="/images/nouveautes-banner.jpg"
          path="/nouveautes"
        />

        {varietiesArray.map((item, index) => (
          <VarieteSquares
            key={index} 
            text={item.title}
            imgSrc={item.imgSrc}
            path={item.path}
          />
        ))}

        <VarieteSquares
          key={30} 
          text="Arbres Fruitiers"
          imgSrc="/images/arbres-fruitiers.jpg"
          path="/arbres-fruitiers"
        />

        <a href="/livraisons"
            className='lg:w-1/3 w-full relative cursor-pointer'
        >
          <div className='m-4'>
            <div className='aspect-ratio-square w-full h-full relative z-0 bg-teal-950 hover:bg-teal-900' style={{ paddingBottom: "100%" }}>
              <div className="h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center">

              <h3 className='text-center text-6xl text-white z-20'>
                  Livraison
                </h3>

                <FontAwesomeIcon className='text-white cursor-pointer w-1/2 h-1/2 mt-3' icon={faTruck} />
              </div>
            </div>

          </div>
        </a>


        <VarieteSquares
          key={31} // Always provide a unique key when mapping over elements
          text="Gamme méditérannéenne"
          imgSrc="/images/gamme-mediterranneenne.jpg"
          path="/mediterranneennes"

        />
      </div>


    </div>
  );
}

export default Varietes;
