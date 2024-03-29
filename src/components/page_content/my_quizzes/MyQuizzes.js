import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { getAllQuizzes } from "../../../services/api_quizzes";
import { Quizz } from "./Quizz";

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
      <div className="component-content">
        <h1 className="mq-heading text-xl md:text-2xl lg:text-3xl mb-3">
          Kolekcija kvizova
        </h1>
        <ul>
          {quizzes.map((quizz) => {
            return (
              <li key={quizz.id}>
                <Quizz
                  name={quizz.name}
                  description={quizz.description}
                  imgSrc={quizz.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyQuizzes;
