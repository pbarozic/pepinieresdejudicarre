import { useEffect, useState } from "react";

function PlantList({ famille }) {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");

const backendLink = 'https://pepinieresjudicarre-backend.vercel.app/'

  useEffect(() => {
    fetch(`${backendLink}${famille}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setPlants(data.data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des plantes : ", error),
      );
  }, [famille]);

  const filteredPlants = plants.filter((plant) =>
    plant.variete.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="w-10/12">
      <div className="my-4">
        <label
          htmlFor="varietyFilter"
          className="block text-sm font-medium text-teal-950"
        >
          Chercher une variété :
        </label>
        <input
          type="text"
          id="varietyFilter"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-950 focus:border-teal-950 block w-full sm:text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="max-h-screen overflow-y-auto lg:mb-10 mb-24">
        <table className="table-auto w-full bg-teal-950 text-white rounded">
          <thead>
            <tr>
              <th className="px-4 py-2">Variété</th>
              <th className="px-4 py-2">Sous-variété</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Conditionnement</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlants.map((plant, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-teal-800" : "bg-teal-900"}
              >
                <td className="text-xs lg:text-base px-4 py-2">
                  {plant.variete.replace(/Nouv\.?|eauté/g, "")}
                  {plant.variete.includes("Nouv") && (
                    <span className="block text-center text-xs  text-white rounded w-1/2 bg-yellow-400 mt-1">
                      Nouveauté
                    </span>
                  )}
                </td>
                <td className="text-xs lg:text-base px-4 py-2">
                  {plant.sousVariete}
                </td>
                <td className="text-xs lg:text-base px-4 py-2">
                  {plant.description}
                </td>
                <td className="text-xs lg:text-base px-4 py-2">
                  {plant.Conditionnement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlantList;
