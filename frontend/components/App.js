import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

function App() {
  // ❗ Create state to hold the data from the API
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const fetchData = async () => {
      const urlPlanets = "http://localhost:9009/api/planets";
      const urlPeople = "http://localhost:9009/api/people";

      try {
        const [response1, response2] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople),
        ]);

        setData1(response1.data);
        setData2(response2.data);

        console.log(response1.data);
        console.log(response2.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  // Combine the data from the two responses
  const combinedData = data2.map((person) => {
    const homeworld = data1.find((planet) => planet.id === person.homeworld);
    return {
      ...person,
      homeworld: homeworld ? homeworld.name : "unknown",
    };
  });

  console.log("combined:", combinedData);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {
        /* ❗ Map over the data in state, rendering a Character at each iteration */
        combinedData.map((person) => {
         return (
           <Character
             key={person.id}
             person={person}
             homeworld={person.homeworld}
           />
         );

         
        })
      }
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
