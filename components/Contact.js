import React from "react";
import Link from "next/link";

import Map from "./Map";

function Contact() {
  return (
    <div
      id="contact"
      className="scroll-smooth mt-6 lg:mt-0 mb-24 lg:h-min-96 h-min-screen h-screen w-screen flex flex-col bg-white scroll-mt-14"
    >
      <div className="w-screen flex flex-col lg:flex-row items-center h-1/3">
        <div className="flex flex-col items-center lg:w-1/3 h-32">
          <h1>NOUS TROUVER</h1>
          <div className="flex flex-col mt-2 lg:mt-6">
            <p>
              Adresse : <b>Lieu-dit Judicarré 29310 Locunolé</b>
            </p>

            <p>
              Téléphone :
              <a href="tel:0298063065">
                <b> 02 98 06 30 65</b>
              </a>
            </p>

            <p>
              E-mail :
              <a href="mailto:pepinieredejudicarre@wanadoo.fr">
                <b> pepinieredejudicarre@wanadoo.fr</b>
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/3 h-32">
          <h1>HORAIRES</h1>
          <div className="mt-2 lg:mt-4 flex flex-col items-center">
            <p>Lun - Ven :</p>
            <b> 8h30 - 12H30</b>
            <b> 14h30 - 17h30</b>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center lg:w-1/3 h-32">
          <h1>AIDE</h1>
          <div className="flex flex-col mt-6">
            <Link href="/livraisons">
              <a className="hover:font-bold">
                <p>Livraisons et retours</p>
              </a>
            </Link>
            <Link href="/livraisons">
              <a className="hover:font-bold">
                <p>Conditions de vente</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-screen h-2/3 flex justify-center">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
