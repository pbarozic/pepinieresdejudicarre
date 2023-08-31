import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header className="bg-teal-950 h-14 w-screen p-2 fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center h-full w-screen">
                <div className="h-full flex items-center lg:w-2/12">
                    <div className="ml-2 h-full">

                        <Image src="/logo/logo.png" alt="Logo" width={40} height={40} />
                    </div>

                    <div className="ml-2 h-full lg:hidden">
                        <Image src="/logo/text-blanc.png" alt="Logo" width={120} height={40} />
                    </div>
                </div>
                <div className="h-full w-2/12 lg:w-8/12 flex justify-center items-center">
                    <NavBar />
                </div>
                <div className="h-full w-2/12 lg:w-2/12 hidden lg:flex flex justify-end items-center">
                    <a href="https://www.facebook.com/pepinieredejudicarre/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className=" text-white cursor-pointer w-8 h-8" icon={faFacebook} />
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;