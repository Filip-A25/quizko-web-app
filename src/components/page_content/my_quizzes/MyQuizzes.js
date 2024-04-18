import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { getAllQuizzes } from "../../../services/api_quizzes";
import { Quizz } from "./Quizz";
import { Link } from "react-router-dom";

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
      <div className="component-content flex flex-col justify-center items-center">
        <h1 className="mq-heading text-xl md:text-2xl lg:text-3xl mb-3 pb-20">
          Kolekcija kvizova
        </h1>
        <ul className="grid grid-cols-2 gap-10 w-full">
          {quizzes.map((quizz) => {
            return (
              <li key={quizz.id} className="flex justify-center align-center">
                <Quizz
                  name={quizz.name}
                  description={quizz.description}
                  imgSrc={quizz.image}
                />
              </li>
            );
          })}
        </ul>
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
