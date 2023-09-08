import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const submenuTimerRef = useRef(null);

    const openSubMenu = () => {
        clearTimeout(submenuTimerRef.current);
        setSubMenuOpen(true);
    };

    const closeSubMenu = () => {
        submenuTimerRef.current = setTimeout(() => {
            setSubMenuOpen(false);
        }, 500); // Change the delay time (in milliseconds) as needed
    };

    const toggleMenu = () => {
        setMenuOpen(true);
    };

    const closeModal = () => {
        setMenuOpen(false);
    };
    
    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <nav className="text-white p-4">
            {/* Add a button for the hamburger menu */}
         <button
              onClick={toggleMenu}
              className="lg:hidden text-white w-6 hover:text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            {/* Regular menu for large screens */}
            <ul className="hidden lg:flex space-x-4">
                <li>
                    <a href="/#accueil"
                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                    >Accueil
                    </a>
                </li>
                <li>
                    <a href="/#about"
                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                    >À propos
                    </a>
                </li>
                <li
                    onMouseEnter={openSubMenu}
                    onMouseLeave={closeSubMenu}
                    className="relative"
                >
                    <a href="/varietes"
                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"

                    >Nos variétés</a>
                    {isSubMenuOpen && (
                        <div
                            onMouseEnter={openSubMenu}
                            onMouseLeave={closeSubMenu}
                            className="absolute w-48 left-0 mt-2 p-2 bg-teal-950 rounded-lg shadow-lg"
                        >
                            <ul className="space-y-2">
                            <li>
                                    <a
                                        href="/toutes-varietes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Toutes les variétés</a>
                                </li>
                                <li>
                                    <a
                                        href="/nouveautes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Nouveautés</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-arbustes"
                                        className="hover-bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbres et Arbustes</a>
                                </li>
                                <li>
                                    <a
                                        href="terres-bruyeres"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Terres de bruyère</a>
                                </li>
                                <li>
                                    <a
                                        href="plantes-grimpantes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Plantes grimpantes</a>
                                </li>
                                <li>
                                    <a
                                        href="fougeres"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Fougères</a>
                                </li>
                                <li>
                                    <a
                                        href="bambous"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Bambous</a>
                                </li>
                                <li>
                                    <a
                                        href="graminees"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Graminées</a>
                                </li>
                                <li>
                                    <a
                                        href="vivaces"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Vivaces</a>
                                </li>
                                <li>
                                    <a
                                        href="arbustes-fruitiers"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbustes Fruitiers</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-petits-conteneurs"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Petits conteneurs</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-fruitiers"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbres Fruitiers</a>
                                </li>
                                <li>
                                    <a
                                        href="mediterranneennes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Méditerranéennes</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <a href="/livraisons"
                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                    >Livraison</a>
                </li>
                <li>
                    <a href="/#contact"
                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                    >Contact</a>
                </li>
            </ul>

            {/* Modal menu for small screens */}
            {isMenuOpen && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-teal-950 opacity-95 z-50">
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                        {/* Add a button to close the modal */}
                        <button
                            className="absolute text-2xl top-4 right-8"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/#accueil"
                                    onClick={closeModal}
                                    className="hover:bg-teal-900 px-3 py-2 text-4xl rounded cursor-pointer"
                                >Accueil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#about"
                                    onClick={closeModal}
                                    className="hover:bg-teal-900 px-3 py-2 text-4xl rounded cursor-pointer"
                                >À propos
                                </a>
                            </li>
                            <li className=''>
                            <a
                                    href="/varietes"
                                    className="hover:bg-teal-900 px-3 py-2 text-4xl rounded cursor-pointer"
                                >
                                    Variétés
                                  
                                </a>
                                {isSubMenuOpen ? (
                                        <FontAwesomeIcon icon={faAngleUp} className="ml-2 cursor-pointer" onClick={toggleSubMenu}
                                        />
                                    ) : (
                                        <FontAwesomeIcon icon={faAngleDown} className="ml-2 cursor-pointer" onClick={toggleSubMenu}
                                        />
                                    )}
                                {isSubMenuOpen && (
                                 <ul className="space-y-2 ml-4">
                                 <li>
                                    <a
                                        href="/toutes-varietes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Toutes les variétés</a>
                                </li>
                                <li>
                                    <a
                                        href="/nouveautes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Nouveautés</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-arbustes"
                                        className="hover-bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbres et Arbustes</a>
                                </li>
                                <li>
                                    <a
                                        href="terres-bruyeres"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Terres de bruyère</a>
                                </li>
                                <li>
                                    <a
                                        href="plantes-grimpantes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Plantes grimpantes</a>
                                </li>
                                <li>
                                    <a
                                        href="fougeres"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Fougères</a>
                                </li>
                                <li>
                                    <a
                                        href="bambous"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Bambous</a>
                                </li>
                                <li>
                                    <a
                                        href="graminees"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Graminées</a>
                                </li>
                                <li>
                                    <a
                                        href="vivaces"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Vivaces</a>
                                </li>
                                <li>
                                    <a
                                        href="arbustes-fruitiers"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbustes Fruitiers</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-petits-conteneurs"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Petits conteneurs</a>
                                </li>
                                <li>
                                    <a
                                        href="arbres-fruitiers"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Arbres Fruitiers</a>
                                </li>
                                <li>
                                    <a
                                        href="mediterranneennes"
                                        className="hover:bg-teal-900 px-3 py-2 rounded cursor-pointer"
                                    >Méditerranéennes</a>
                                </li>
                            </ul>)}
                            </li>
                            <li>
                                <a
                                    href="/livraisons"
                                    className="hover:bg-teal-900 px-3 py-2 text-4xl rounded cursor-pointer"
                                >Livraison</a>
                            </li>
                            <li>
                                <a
                                    href="/#contact"
                                    onClick={closeModal}
                                    className="hover:bg-teal-900 px-3 py-2 text-4xl rounded cursor-pointer"
                                >Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
