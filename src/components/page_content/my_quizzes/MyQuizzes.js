import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { getAllQuizzes } from "../../../services/api_quizzes";
import { Quizz } from "./Quizz";
import { Link } from "react-router-dom";

import arrowLeft from "../../../icons/arrow-left.svg";
import arrowRight from "../../../icons/arrow-right.svg";

function MyQuizzes() {
  const { handleElementReveal } = useContext(MainContext);
  const [quizzes, setQuizzes] = useState([]);
  const revealingElements = useRef([]);

  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal(revealingElements));

    return () => {
      window.removeEventListener(
        "scroll",
        handleElementReveal(revealingElements)
      );
    };
  }, []);

  const fetchData = async () => {
    try {
      const quizzesData = await getAllQuizzes();
      setQuizzes([...quizzesData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="my-quizzes-content">
      <div className="component-content h-full flex flex-col justify-start md:w-[88vw] lg:w-[84vw] md:ml-[12vw] lg:ml-[16vw]">
        <h1 className="mq-heading sm:my-[1vh] sm:mx-[2vw] lg:my-[5vh] lg:mx-[5vw] text-xl md:text-2xl lg:text-3xl mb-3 lg:pb-20">
          Kolekcija kvizova
        </h1>
        <ul className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10 w-full md:grid-cols-1 sm:grid-cols-1 sm:mb-10">
          {quizzes.map((quizz) => {
            return (
              <li key={quizz.id} className="flex justify-center align-center">
                <Quizz
                  id={quizz.id}
                  name={quizz.name}
                  description={quizz.description}
                  imgSrc={quizz.image}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex self-center bg-white rounded-xl my-5 gap-5">
          <button>
            <img className="w-10 h-10" src={arrowLeft} alt="left" />
          </button>
          <button>
            <img className="w-10 h-10" src={arrowRight} alt="right" />
          </button>
        </div>
        <Link
          to="/kreiraj-kviz"
          className="bg-gray-500 text-white p-3 rounded-md self-end mr-10"
        >
          Kreiraj novi kviz
        </Link>
      </div>
    </div>
  );
}

export default MyQuizzes;
