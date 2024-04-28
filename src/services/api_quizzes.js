import { get, post, put, remove } from "./api_base";

const getAllQuizzes = async () => {
  try {
    const resp = await get("/quizzes/my-quizzes");
    const data = resp.data.paginatedQuizzes;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getQuiz = async (quizId) => {
  try {
    const resp = await get(`/quizzes/quiz/${quizId}`);
    const data = resp.data.quiz;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createQuiz = async (quizData) => {
  try {
    const resp = await post("/quizzes/create-new-quiz", quizData);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

const getAllQuestionsForRound = async (questionNumber, roundId) => {
  try {
    console.log(roundId);
    console.log(questionNumber);
    const resp = await get(
      `/quizzes/round-questions/${roundId}?page=${questionNumber}&limit=1`
    );
    const data = resp.data.questions;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllQuizzes, createQuiz, getQuiz, getAllQuestionsForRound };
