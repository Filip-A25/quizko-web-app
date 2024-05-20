import React, { useEffect, useState } from "react";
import { getQuizById } from "../../../services/api_quizzes";
import { useParams } from "react-router-dom";
import { Round } from "./Round";
import { Question } from "./Question";
import { getAllQuestionsFromRound } from "../../../services/API_Rounds";
import { Skeleton } from "../../../Skeleton";

export const Display_Quiz = () => {
  let { quizId } = useParams();
  const [rounds, setRounds] = useState([]);
  const [isRoundDisplay, setIsRoundDisplay] = useState(true);
  const [currRound, setCurrRound] = useState(-1);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [numOfQuestionsRound, setNumOfQuestionsRound] = useState(0);
  const [numOfRounds, setNumOfRounds] = useState(0);
  const [isLoadingRound, setIsLoadingRound] = useState(false);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  const fetchData = async () => {
    setIsLoadingRound(true);
    try {
      console.log(quizId);
      const resp = await getQuizById(quizId);
      console.log([...resp.quiz.rounds]);
      setRounds([...resp.quiz.rounds]);
      setNumOfRounds(resp.quiz.num_of_rounds);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingRound(false);
    }
  };

  const getRoundData = (query) => {
    let resp;
    if (rounds.length > 0) {
      resp = query === "name" ? rounds[currRound + 1].name : currRound + 1;
    }

    return resp;
  };

  const getQuestionsForRound = async () => {
    console.log("Loading is true");
    setIsLoadingQuestions(true);
    try {
      if (rounds.length > 0) {
        setNumOfQuestionsRound(rounds[0].num_of_questions);
        const roundId = await rounds[currRound]._id;
        const resp = await getAllQuestionsFromRound(roundId);
        const data = resp.data.questions;
        console.log(data);
        setQuestions([...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const increaseRound = () => {
    setCurrRound(currRound + 1);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    getQuestionsForRound();
    console.log(currRound);
  }, [currRound]);

  const isLastQuestionOfLastRound = () => {
    console.log(
      `Current round is ${
        currRound + 1
      }, there are ${numOfRounds} rounds. Curr Question is ${
        currQuestion + 1
      }, there are ${numOfQuestionsRound} questions`
    );
    if (
      currRound + 1 === numOfRounds &&
      currQuestion + 1 === numOfQuestionsRound + 1
    ) {
      return true;
    } else return false;
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen lg:pl-[16vw] md:pl-[12vw] sm:pl-[0]">
      {isRoundDisplay ? (
        isLoadingRound ? (
          <Skeleton field="runda-div" width="full" />
        ) : (
          <Round
            roundName={getRoundData("name")}
            roundNumber={getRoundData("number")}
            changeToQuestion={setIsRoundDisplay}
            increaseRound={increaseRound}
          />
        )
      ) : isLoadingQuestions ? (
        <Skeleton field="question-div" width="1/2" />
      ) : (
        <Question
          currQuestion={currQuestion}
          changeToRound={setIsRoundDisplay}
          questionsData={questions}
          setQuestions={setQuestions}
          setCurrQuestion={setCurrQuestion}
          roundId={rounds[currRound]._id}
          numOfQuestions={numOfQuestionsRound}
          isLastRoundChecker={isLastQuestionOfLastRound}
        />
      )}
    </div>
  );
};
