import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../../icons/edit-icon.png";
import deleteIcon from "../../../icons/delete-icon.png";
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
    <div className="quiz-div flex justify-center items-center w-full lg:h-40 md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh] bg-text-light-color rounded-md">
      <img src={imgSrc ?? placeholderImg} alt="quiz" className="h-full w-1/3" />
      <div className="flex flex-col w-2/3 px-2 h-full gap-1 relative text-text-color">
        <div className="flex justify-between mt-6 pr-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <button className="w-8 self-end">
            <img src={editIcon} alt="pencil" className="h-7"/>
          </button>
        </div>
        <p>{description}</p>
        <div className="flex justify-between w-5/6 h-1/4 absolute bottom-1">
          <button className="w-8 h-full" onClick={handleDeleteQuiz}>
            <img src={deleteIcon} alt="trash-can" className="h-3/4" />
          </button>
          <Link
            to={`kviz/${id}`}
            className="w-24 h-full py-2 text-sm text-main-theme rounded-md bg-green-500 text-center font-bold"
          >
            Pokreni kviz
          </Link>
        </div>
      </div>
    </div>
  );
};
