import React from "react";

import editIcon from "../../../icons/editIcon.svg";
import deleteIcon from "../../../icons/delete-icon.svg";
import placeholderImg from "../../../icons/placeholder-image.png";

export const Quizz = ({ name, description, imgSrc }) => {
  return (
    <div className="w-1/5 h-40 bg-white rounded-md flex justify-start items-start">
      <img src={imgSrc ?? placeholderImg} alt="quiz" className="h-full w-1/3" />
      <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
        <button className="w-8 h-1/5 self-end">
          <img src={editIcon} alt="pencil" />
        </button>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between h-1/4">
          <button className="w-8 h-full">
            <img src={deleteIcon} alt="trash-can" className="h-full" />
          </button>
          <button className="w-24 h-full py-2 text-white rounded-md bg-green-500">
            Pokreni kviz
          </button>
        </div>
      </div>
    </div>
  );
};
