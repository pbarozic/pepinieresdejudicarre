import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
      <footer className="visible lg:invisible bg-green-800 text-white w-screen h-24 fixed bottom-0 z-50">
          {/* <p className="lg:text-sm text-white text-xs">© 2023 - developped by Pierre-Baptiste Rozic</p> */}
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
    );
  }

  export default Footer