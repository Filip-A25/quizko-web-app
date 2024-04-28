import React from "react";

import { Link, useParams } from "react-router-dom";

export const StartQuiz = () => {
  let { quizId } = useParams();
  return (
    <div className="h-full lg:pl-40 md:pl-10 pt-10 flex flex-col md:w-[88vw] lg:w-[84vw] md:ml-[12vw] lg:ml-[16vw] sm:w-screen md:items-start lg:items-start sm:items-center justiy-center items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-3">Pokreni kviz</h2>
      <label>Ime igrača ili tima</label>
      <input
        type="text"
        placeholder="Unesite ime"
        className="rounded-md border-gray-200 border-2 hover:border-yellow-500 p-4 h-8 lg:w-[20vw] md:w-[40vw] sm:w-[80vw]"
      />
      <input
        type="submit"
        value="Dodaj"
        className="bg-[#4D4D4D] w-36 h-10 p-2 rounded-md mt-6 text-white cursor-pointer"
      />
      <h3>Rezultatska ljestvica</h3>
      <div>Scoreboard</div>
      <div className="flex gap-20 ">
        <button className="bg-[#e1bf57] w-36 h-10 p-2 rounded-md mt-6">
          Uredi ljestvicu
        </button>
        <Link
          to={`/pokreni-kviz/${quizId}`}
          className="bg-[#27AE60] text-center w-36 h-10 p-2 rounded-md mt-6 text-white"
        >
          Pokreni kviz
        </Link>
      </div>
    </div>
  );
};
