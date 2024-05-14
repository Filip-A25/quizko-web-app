import React, { useState } from "react";

import arrowLeft from "../../../icons/arrow-left.svg";
import arrowRight from "../../../icons/arrow-right.svg";

const CreateQuiz_Rounds = () => {
  const [roundNum, setRoundNum] = useState(1);

  return (
    <div className="flex flex-col">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-3">Uredi runde</h2>
      <div className="flex gap-5">
        <h3 className="text-2xl">Runda {roundNum}</h3>
        <div className="bg-white p-2 flex gap-2 rounded-3xl">
          <button
            className="text-2xl"
            onClick={() => {
              if (roundNum > 1) {
                setRoundNum(roundNum - 1);
              }
            }}
          >
            <img src={arrowLeft} alt="left" className="h-5" />
          </button>
          <button
            className="text-2xl"
            onClick={() => {
              setRoundNum(roundNum + 1);
            }}
          >
            <img src={arrowRight} alt="right" className="h-5" />
          </button>
        </div>
      </div>
      <form className="flex flex-col w-1/4">
        <label>Kategorija runde (opcionalno)</label>
        <input type="text" placeholder="Upišite naziv" />
        <label>Timer za pitanja u sekundama</label>
        <input type="number" placeholder="Upišite vrijeme" />
        <label>Broj pitanja</label>
        <input type="number" placeholder="Unesite broj" />
        <label>Vrsta odgovora</label>
        <input type="radio" />
        <label>2 ponuđena odgovora</label>
        <input type="radio" />
        <label>4 ponuđena odgovora</label>
        <input type="radio" />
        <label>nema ponuđenih odgovora</label>
      </form>
    </div>
  );
};

export default CreateQuiz_Rounds;

