import { useRef, useContext, useEffect, useState, createContext } from "react";
import {MainContext} from "../../../MainContent";
import {Outlet} from "react-router-dom";

const QuizContext = createContext();

function MainCreateQuiz() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

  const [quizData, setQuizData] = useState({});
  const [quizRoundData, setQuizRoundData] = useState([]);
  const [roundQuestionData, setRoundQuestionData] = useState([]);

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

  return (
    <div id="create-quiz-content" className="flex justify-center items-center h-[115vh] sm:h-[90vh] md:h-full w-screen md:w-[88vw] lg:w-[84vw] absolute right-0 z-0">
      <div className="component-content h-full w-full">
        <section
          className="reveal flex flex-col sm:flex-row justify-center gap-14"
          ref={(el) => (revealingElements.current[0] = el)}
        >
          <QuizContext.Provider value={{quizData, setQuizData, quizRoundData, setQuizRoundData, roundQuestionData, setRoundQuestionData}}>
            <Outlet />
          </QuizContext.Provider>
        </section>
      </div>
    </div>
  );
}

export default MainCreateQuiz;
export {QuizContext};
