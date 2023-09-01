import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      <footer className="bg-teal-950 py-4 px-6 text-white w-screen fixed bottom-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="lg:text-sm text-xs">© 2023 Pierre-Baptiste Rozic</p>
          <div className="flex">
          <div className="h-full w-2/12 lg:w-2/12 hidden lg:flex flex justify-end items-center">
                    <a href="https://www.facebook.com/pepinieredejudicarre/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className=" text-white cursor-pointer w-8 h-8" icon={faFacebook} />
                    </a>
                </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer