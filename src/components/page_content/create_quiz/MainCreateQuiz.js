import { useRef, useContext, useEffect, createContext, useState } from "react";
import {MainContext} from "../../../MainContent";
import {Outlet, useBlocker} from "react-router-dom";
import {deleteQuiz} from "../../../services/api_quizzes";
import {createNewAnswerForQuestion} from "../../../services/API_Rounds";

const QuizContext = createContext();

function MainCreateQuiz() {
  const { handleElementReveal, navigate } = useContext(MainContext);
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

  const getCurrentRoundNum = () => {
    return localStorage.getItem("current_round_num");
  }

  const setCurrentRoundNum = (value) => {
    localStorage.setItem("current_round_num", value);
  }

  const getCurrentQuestionNum = () => {
    return localStorage.getItem("current_question_num");
  }

  const setCurrentQuestionNum = (value) => {
    localStorage.setItem("current_question_num", value);
  }

  const getRoundNum = () => {
    return localStorage.getItem("round_num");
  }

  const setRoundNum = (value) => {
    localStorage.setItem("round_num", value);
  }

  const getQuestionNum = () => {
    return localStorage.getItem("question_num");
  }

  const setQuestionNum = (value) => {
    localStorage.setItem("question_num", value);
  }

  const [roundLink, setRoundLink] = useState("/kreiraj-kviz/nova-runda");
  const [questionLink, setQuestionLink] = useState("/kreiraj-kviz/novo-pitanje");

  // Spremi id-ove za trenutni kviz, rundu i pitanje da bi se mogli koristiti za ostale requestove
  const setQuizId = (id) => {
    if (localStorage.getItem("quiz_id")) localStorage.removeItem("quiz_id");
    localStorage.setItem("quiz_id", id);
  }

  const setRoundId = (id) => {
    if (localStorage.getItem("round_id")) localStorage.removeItem("round_id");
    localStorage.setItem("round_id", id);
  }

  // Navigira nakon klika na button "Dalje" u svakom PITANJU
  const handleNavigate = () => {
    let currentQuestionNum = getCurrentQuestionNum();
    let currentRoundNum = getCurrentRoundNum();
    const questionNum = getQuestionNum();
    const roundNum = getRoundNum();

    setFormNavigate(true);
    
    if (currentQuestionNum === questionNum && currentRoundNum === roundNum) {
        clearLocalStorage();
        navigate("/kreiraj-kviz");
    }
    if (currentQuestionNum === questionNum && currentRoundNum < roundNum) {
        navigate("/kreiraj-kviz/nova-runda");
    }
    if (currentQuestionNum < questionNum) {
        setCurrentQuestionNum(++currentQuestionNum);
        navigate("/kreiraj-kviz/novo-pitanje");
    }
}

  const [answersNumber, setAnswersNumber] = useState(2);

  // Kreiraj određeni broj odgovora za kviz
  const handleAnswersCreate = async (e) => {
    const questionId = localStorage.getItem("question_id");

    try {
      for (let i = 1; i <= answersNumber * 2; i++) {
        await createNewAnswerForQuestion(questionId, {
          answer: e.target[i].value,
          is_correct: e.target[i + 1].checked
        })
        i++;
      }

      handleNavigate();
    } catch (err) {
      throw new Error(err);
    }
  }

  // Brisanje cijelog kviza - "Odbaci kviz"
  const handleQuizDelete = async () => {
    try {
      const id = localStorage.getItem("quiz_id");
      await deleteQuiz(id);
      clearLocalStorage();

      navigate("/kreiraj-kviz");
    } catch (err) {
      throw new Error(err);
    }
  }

  // Ciscenje local storage-a od id-ova kviza, rundi, pitanja i paginga
  const clearLocalStorage = () => {
    localStorage.removeItem("quiz_id");
    localStorage.removeItem("round_id");
    localStorage.removeItem("question_id");
    localStorage.removeItem("round_num");
    localStorage.removeItem("question_num");
    localStorage.removeItem("current_round_num");
    localStorage.removeItem("current_question_num");
  }


  const blocker = useBlocker(({currentLocation, nextLocation}) => {
    return !formNavigate && currentLocation.pathname !== "/kreiraj-kviz" && currentLocation.pathname !== "/kreiraj-kviz/" &&
    currentLocation.pathname !== nextLocation.pathname && nextLocation.pathname !== "kreiraj-kviz" && nextLocation.pathname !== "/kreiraj-kviz/nova-runda" &&
    nextLocation.pathname !== "/kreiraj-kviz/novo-pitanje";
  })

  const [formNavigate, setFormNavigate] = useState(false);

  // Kada korisnik izlazi iz kreiranja kviza blocker ga obavjestava da ce mu se cijeli kviz izbrisati, ukoliko klikne nastavi
  // brise se cijeli local storage, brise se kviz i korisnik nastavlja na page na koji je kliknuo
  const handleBlockerProceed = async () => {
    try {
      const id = localStorage.getItem("quiz_id");
      await handleQuizDelete(id);
      clearLocalStorage();
      
      blocker.proceed();
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <div id="create-quiz-content" className="flex justify-center items-center h-[90vh] sm:h-[90vh] md:h-full w-screen md:w-[88vw] lg:w-[84vw] absolute right-0 z-0">
      <div className="component-content relative h-full w-full">
        <section
          className="reveal flex flex-col sm:flex-row justify-center gap-14"
          ref={(el) => (revealingElements.current[0] = el)}
        >
          <QuizContext.Provider value={{setQuizId, setRoundId, getRoundNum, setRoundNum, getQuestionNum, setQuestionNum, roundLink, setRoundLink, questionLink, setQuestionLink,
          getCurrentRoundNum, setCurrentRoundNum, getCurrentQuestionNum, setCurrentQuestionNum, handleQuizDelete, answersNumber, setAnswersNumber, handleAnswersCreate, blocker,
          handleBlockerProceed, clearLocalStorage, setFormNavigate}}>
            <Outlet />
          </QuizContext.Provider>
        </section>
      </div>
    </div>
  );
}

export default MainCreateQuiz;
export {QuizContext};
