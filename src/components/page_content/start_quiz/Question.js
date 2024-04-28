import React, { useEffect, useState } from "react";
import { getAllQuestionsForRound } from "../../../services/api_quizzes";
import { useNavigate } from "react-router-dom";

export const Question = ({
  currQuestion,
  questionsData,
  changeToRound,
  setCurrQuestion,
  setQuestions,
  roundId,
  numOfQuestions,
  isLastRoundChecker,
}) => {
  const [correctAnwer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isCorrAnswerDisplay, setIsCorrAnswerDisplay] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionsData.length > 0) {
      setAnswers(questionsData[0].answers);
      console.log(answers);
      const corrAnswerData = questionsData[0].answers.find(
        (answer) => answer.is_correct === true
      );
      if (corrAnswerData) {
        console.log(corrAnswerData.answer);
        setCorrectAnswer(corrAnswerData.answer);
      }
    }
  }, [currQuestion, questionsData]);

  const fetchDataForNextQuestion = async (nextQuestion) => {
    const resp = await getAllQuestionsForRound(nextQuestion, roundId);
    console.log(resp);
    setQuestions([...resp]);
  };

  const handleNextQuestion = () => {
    if (!isLastRoundChecker()) {
      console.log(numOfQuestions);
      console.log(currQuestion);
      if (currQuestion < numOfQuestions) {
        setIsCorrAnswerDisplay(false);
        const nextQuestion = currQuestion + 1;
        setCurrQuestion(nextQuestion);
        fetchDataForNextQuestion(nextQuestion);
      } else {
        setCurrQuestion(1);
        changeToRound(true);
      }
    } else {
      navigate("/moji-kvizovi");
    }
  };

  const handleCorrectAnswerReveal = () => {
    setIsCorrAnswerDisplay(true);
  };

  return (
    <>
      {isCorrAnswerDisplay ? (
        <div className="self-start mt-10">
          {questionsData.map((question) => {
            return (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="lg:text-3xl mb-10 md:text-md sm:text-sm text-xl">
                  Pitanje {currQuestion + ": "} {question.name}
                </h2>
                <h3 className="text-3xl bg-white text-center p-20 rounded-2xl border-4 border-[#138F48]">
                  {correctAnwer.length > 0 && <p>{correctAnwer}</p>}
                </h3>
                <button className="bg-[#E1BF57] w-36 h-10 p-2 rounded-md mt-6">
                  Uredi ljestvicu
                </button>
                <button
                  onClick={handleNextQuestion}
                  className={`${
                    isLastRoundChecker() ? "bg-[#A10000]" : "bg-[#4D4D4D]"
                  } text-white w-36 h-10 p-2 rounded-md mt-6`}
                >
                  {isLastRoundChecker() ? "Završi kviz" : "Sljedeće pitanje"}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="self-start mt-10 w-full h-90vh">
          {questionsData.map((question) => {
            return (
              <div
                key={question.id}
                className="w-full h-full flex flex-col justify-center items-center"
              >
                <h2 className="lg:text-3xl mb-10 md:text-md sm:text-sm text-xl">
                  Pitanje {currQuestion + ": "}
                  {question.name}
                </h2>
                <ul className="flex justify-center items-center flex-col gap-5 mb-5 w-1/2">
                  {answers.map((answer) => {
                    return (
                      <li
                        key={answer.id}
                        className="bg-white self-start w-full px-2 py-2 text-l border-2 border-[#e1bf57]"
                      >
                        {answer.answer}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={handleCorrectAnswerReveal}
                  className="bg-[#27AE60] text-white w-36 h-10 p-2 rounded-md mt-6"
                >
                  Prikaži odgovor
                </button>
                <div className="flex flex-col w-full justify-around items-center md:flex-row lg:flex-row xl:flex-row">
                  <button className="bg-[#E1BF57] w-36 h-10 p-2 rounded-md mt-6">
                    Uredi ljestvicu
                  </button>
                  <button className="bg-[#A10000] text-white w-36 h-10 p-2 rounded-md mt-6">
                    Izlaz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
