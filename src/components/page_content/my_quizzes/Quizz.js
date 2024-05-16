import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../../icons/editIcon.svg";
import deleteIcon from "../../../icons/delete-icon.svg";
import placeholderImg from "../../../icons/placeholder-image.png";
import { deleteQuiz } from "../../../services/api_quizzes";

export const Quizz = ({ id, name, description, imgSrc, dataFetch, categoriesFetch }) => {

  const handleDeleteQuiz = async () => {
    try {
      await deleteQuiz(id);
      await dataFetch();
      await categoriesFetch();
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <div className="rounded-md flex justify-center items-center lg:w-1/2 lg:h-40 bg-white md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh]">
      <img src={imgSrc ?? placeholderImg} alt="quiz" className="h-full w-1/3" />
      <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
        <button className="w-8 h-1/5 self-end">
          <img src={editIcon} alt="pencil" />
        </button>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between h-1/4">
          <button className="w-8 h-full" onClick={handleDeleteQuiz}>
            <img src={deleteIcon} alt="trash-can" className="h-full" />
          </button>
          <Link
            to={`kviz/${id}`}
            className="w-24 h-full py-2 text-white rounded-md bg-green-500 text-center"
          >
            Pokreni kviz
          </Link>
        </div>
      </div>
    </div>
  );
};
