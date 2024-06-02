import React, { useEffect, useState } from "react";
import { getAllQuestionsFromRound } from "../../../services/API_Rounds";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../../../Skeleton";

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
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isCorrAnswerDisplay, setIsCorrAnswerDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionsData.length > 0) {
      const currentQuestionData = questionsData[currQuestion - 1];
      if (currentQuestionData) {
        setAnswers(currentQuestionData.answers);
        const corrAnswerData = currentQuestionData.answers.find(
          (answer) => answer.is_correct === true
        );
        if (corrAnswerData) {
          setCorrectAnswer(corrAnswerData.answer);
        }
      }
    }
  }, [currQuestion, questionsData]);

  const handleNextQuestion = () => {
    if (!isLastRoundChecker()) {
      if (currQuestion < numOfQuestions) {
        setIsCorrAnswerDisplay(false);
        const nextQuestion = currQuestion + 1;
        setCurrQuestion(nextQuestion);
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

  const currentQuestionData = questionsData[currQuestion - 1];

  if (!currentQuestionData) return null;

  return (
    <>
      {isCorrAnswerDisplay ? (
        <div className="self-start mt-10 w-full h-90vh flex flex-col justify-center items-center">
          <h2 className="lg:text-3xl mb-10 md:text-md sm:text-sm text-xl">
            Pitanje {currQuestion + ": "} {currentQuestionData.name}
          </h2>
          <h3 className="text-3xl bg-white text-center p-20 rounded-2xl border-4 border-[#138F48]">
            {correctAnswer}
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
      ) : isLoading ? (
        <Skeleton field="question-div" width="1/2" />
      ) : (
        <div className="self-start mt-10 w-full h-90vh flex flex-col justify-center items-center">
          <h2 className="lg:text-3xl mb-10 md:text-md sm:text-sm text-xl">
            Pitanje {currQuestion + ": "} {currentQuestionData.name}
          </h2>
          <ul className="flex justify-center items-center flex-col gap-5 mb-5 w-1/2">
            {answers.map((answer) => (
              <li
                key={answer.id}
                className="self-start w-full px-2 py-2 text-l bg-[#e1bf57] text-white rounded-md"
              >
                {answer.answer}
              </li>
            ))}
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
            <button
              className="bg-[#A10000] text-white w-36 h-10 p-2 rounded-md mt-6"
              onClick={() => navigate("/moji-kvizovi")}
            >
              Izlaz
            </button>
          </div>
        </div>
      )}
    </>
  );
};
