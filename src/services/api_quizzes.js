import { data } from "autoprefixer";
import { get, post, put, remove, getJSON, postJSON } from "./api_base";

const getMyQuizzes = async () => {
  try {
    const resp = await get("/quizzes/my-quizzes");
    console.log(resp.data.paginatedQuizzes);
    return resp.data.paginatedQuizzes;
  } catch (error) {
    console.log(error);
  }
};

const getQuizById = async (id) => {
  try {
    const response = await get(`/quizzes/quiz/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const createNewQuiz = async (data) => {
  try {
    const response = await post("/quizzes/create-new-quiz", data);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const deleteQuiz = async (id) => {
  try {
    const response = await remove(`/quizzes/delete-quiz/${id}`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export { getMyQuizzes, getQuizById, createNewQuiz, deleteQuiz };
