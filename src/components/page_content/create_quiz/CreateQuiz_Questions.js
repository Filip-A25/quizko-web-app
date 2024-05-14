import React, { useState } from "react";

import arrowLeft from "../../../icons/arrow-left.svg";
import arrowRight from "../../../icons/arrow-right.svg";
import checkSign from "../../../icons/check-sign.svg";
import checkSignGreen from "../../../icons/check-sign-green.svg";
import placeholderImage from "../../../icons/placeholder-image.png";

const CreateQuiz_Questions = () => {
  const [roundNum, setRoundNum] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);

  const handleCheck = () => {};

  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-3">Uredi pitanja</h2>
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

      <div className="flex gap-5">
        <h3 className="text-xl">Pitanje {questionNum}</h3>
        <div className="bg-white p-2 flex gap-2 rounded-3xl">
          <button
            className="text-2xl"
            onClick={() => {
              if (questionNum > 1) {
                setQuestionNum(questionNum - 1);
              }
            }}
          >
            <img src={arrowLeft} alt="left" className="h-5" />
          </button>
          <button
            className="text-2xl"
            onClick={() => {
              setQuestionNum(questionNum + 1);
            }}
          >
            <img src={arrowRight} alt="right" className="h-5" />
          </button>
        </div>
      </div>
      <form>
        <label>Pitanje</label>
        <input type="text" placeholder="Unesite pitanje" />
        <h3>Odgovori</h3>
        <input type="text" placeholder="Upišite odgovor" />
        <button>
          <img src={checkSign} alt="check" className="h-7" />
        </button>
        <input type="text" placeholder="Upišite odgovor" />
        <button>
          <img src={checkSign} alt="check" className="h-7" />
        </button>
        <input type="text" placeholder="Upišite odgovor" />
        <button>
          <img src={checkSign} alt="check" className="h-7" />
        </button>
        <input type="text" placeholder="Upišite odgovor" />
        <button>
          <img src={checkSign} alt="check" className="h-7" />
        </button>
      </form>
      <label>Broj bodova za pitanje (opcionalno)</label>
      <input type="number" placeholder="Unesite broj" />
      <p>*ako ne unesete broj bodova pitanje nosi 1 bod</p>
      <img src={placeholderImage} alt="placeholder" />
      <button className="bg-[#e1bf57] w-36 h-10 p-2 rounded-md mt-6">
        Učitaj sliku
      </button>
    </div>
  );
};

export default CreateQuiz_Questions;

