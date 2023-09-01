import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [varietesSubMenuOpen, setVarietesSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      const sections = ['accueil', 'a-propos', 'nos-varietes', 'livraisons', 'contact'];
      const currentPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= currentPosition && currentPosition <= bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleVarietesSubMenu = () => {
    setVarietesSubMenuOpen(!varietesSubMenuOpen);
  };

  return (
    <nav className={`transition-all duration-300 py-3 ${scrolling ? 'bg-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-teal-950 opacity-90 z-50">
              <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <button
                  onClick={closeMenu}
                  className="absolute top-3 right-3 text-white text-3xl focus:outline-none"
                >
                  &times;
                </button>
                <ul className="text-white text-3xl flex flex-col space-y-6">
                  <li><a className={activeSection === 'accueil' ? 'font-bold' : ''} href="#accueil">Accueil</a></li>
                  <li><a className={activeSection === 'a-propos' ? 'font-bold' : ''} href="#a-propos">À propos</a></li>
                  <li>
                    <div
                      className={`relative group ${activeSection === 'nos-varietes' ? 'font-bold' : ''}`}
                      onClick={toggleVarietesSubMenu}
                    >
                      Nos variétés
                      {varietesSubMenuOpen && (
                        <ul className="absolute left-0 top-full shadow-md rounded-md space-y-2">
                          <li><a href="#nouveautes">Nouveautés</a></li>
                          <li><a href="#plantes-grimpantes">Plantes grimpantes</a></li>
                          <li><a href="#graminees">Graminées</a></li>
                          <li><a href="#vivaces">Vivaces</a></li>
                          <li><a href="#plantes-mediterraneennes">Plantes méditerranéennes</a></li>
                          <li><a href="#plantes-de-terre-de-bruyere">Plantes de terre de bruyère</a></li>
                          <li><a href="#fougeres">Fougères</a></li>
                          <li><a href="#bambou">Bambou</a></li>
                          <li><a href="#arbres-et-arbustes">Arbres et Arbustes</a></li>
                          <li><a href="#arbustes-fruitiers">Arbustes Fruitiers</a></li>
                          <li><a href="#arbres-fruitiers">Arbres Fruitiers</a></li>
                          <li><a href="#arbres-petits-conteneurs">Arbres Petits conteneurs</a></li>
                        </ul>
                      )}
                    </div>
                  </li>
                  <li><a className={activeSection === 'livraisons' ? 'font-bold' : ''} href="#livraisons">Livraisons</a></li>
                  <li><a className={activeSection === 'contact' ? 'font-bold' : ''} href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          )}
          <div className="hidden lg:block">
            <ul className="text-white flex space-x-6">
              <li>
                <a
                  className={`${activeSection === 'accueil' ? 'font-bold' : ''} hover:bg-teal-900 px-3 py-2 rounded`}
                  href="#accueil"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  className={`${activeSection === 'a-propos' ? 'font-bold' : ''} hover:bg-teal-900 px-3 py-2 rounded`}
                  href="#a-propos"
                >
                  À propos
                </a>
              </li>
              <li>
                <div
                  className={`relative group ${activeSection === 'nos-varietes' ? 'font-bold' : ''} hover:bg-teal-900 px-3 rounded`}
                  onMouseOver={toggleVarietesSubMenu}
                >
                  Nos variétés
                  {varietesSubMenuOpen && (
                    <ul className="absolute left-0 top-full shadow-md rounded-md space-y-2">
                      <li><a href="#nouveautes">Nouveautés</a></li>
                      <li><a href="#plantes-grimpantes">Plantes grimpantes</a></li>
                      <li><a href="#graminees">Graminées</a></li>
                      <li><a href="#vivaces">Vivaces</a></li>
                      <li><a href="#plantes-mediterraneennes">Plantes méditerranéennes</a></li>
                      <li><a href="#plantes-de-terre-de-bruyere">Plantes de terre de bruyère</a></li>
                      <li><a href="#fougeres">Fougères</a></li>
                      <li><a href="#bambou">Bambou</a></li>
                      <li><a href="#arbres-et-arbustes">Arbres et Arbustes</a></li>
                      <li><a href="#arbustes-fruitiers">Arbustes Fruitiers</a></li>
                      <li><a href="#arbres-fruitiers">Arbres Fruitiers</a></li>
                      <li><a href="#arbres-petits-conteneurs">Arbres Petits conteneurs</a></li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <a
                  className={`${activeSection === 'livraisons' ? 'font-bold' : ''} hover:bg-teal-900 px-3 py-2 rounded`}
                  href="#livraisons"
                >
                  Livraisons
                </a>
              </li>
              <li>
                <a
                  className={`${activeSection === 'contact' ? 'font-bold' : ''} hover:bg-teal-900 px-3 py-2 rounded`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
