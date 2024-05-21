import {
  get,
  post,
  put,
  remove,
  getJSON,
  postJSON,
  getPARAMS,
} from "./api_base";

const getMyQuizzes = async (pageNum) => {
  try {
    const resp = await getPARAMS(`/quizzes/my-quizzes`, {
      page: pageNum,
      limit: 4,
    });
    console.log(resp);
    return resp.data.paginatedQuizzes;
  } catch (error) {
    console.log(error);
  }
};

const getQuizById = async (id) => {
  try {
    const response = await get(`/quizzes/quiz/${id}`);
    console.log(response);
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
