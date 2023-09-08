import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Calculate the scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      // Set a scroll threshold, adjust as needed
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Set the scroll percentage threshold, in this case, 95%
      const scrollThresholdPercentage = 98;

      // Calculate the scroll threshold based on the percentage
      const scrollThreshold = (scrollThresholdPercentage / 100) * pageHeight;

      // Check if the user has scrolled past the threshold
      setIsFooterVisible(scrollY >= scrollThreshold);
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isFooterVisible && (
        <footer className="hidden lg:flex w-screen h-8 justify-center items-center fixed bottom-0 z-50">
          <p className="text-teal-950 text-xs">© 2023 - developed by Pierre-Baptiste Rozic</p>
        </footer>
      )}
      <footer className="flex lg:hidden bg-teal-800 text-white w-screen h-24 fixed bottom-0 z-50">
          <div className="flex h-full w-screen justify-between items-center">
          <div className="h-full w-1/3 flex justify-center items-center border-r">
                    <a href="tel:0298063065">
                        <FontAwesomeIcon className=" text-white cursor-pointer w-8 h-8" icon={faPhone} />
                    </a>
                </div>         
                 <div className="h-full w-1/3 flex justify-center items-center border-r">
                 <a href="mailto:pepinieredejudicarre@wanadoo.fr">
                        <FontAwesomeIcon className=" text-white cursor-pointer w-8 h-8" icon={faEnvelope} />
                    </a>
                </div>
          <div className="h-full w-1/3 flex justify-center items-center">
                    <a href="https://www.facebook.com/pepinieredejudicarre/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className=" text-white cursor-pointer w-8 h-8" icon={faFacebook} />
                    </a>
                </div>
          </div>
      </footer>
      </>
    );
  }

  export default Footer