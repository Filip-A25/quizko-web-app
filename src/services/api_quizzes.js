import { data } from "autoprefixer";
import { get, post, put, remove, getJSON, postJSON } from "./API_Base";

const getMyQuizzes = async () => {
  try {
    const resp = await get("/my-quizzes");
    const data = resp;
    return data;
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
}

const createNewQuiz = async (data) => {
  try {
    const response = await post("/quizzes/create-new-quiz", data);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

const deleteQuiz = async (id) => {
  try {
    const response = await remove(`/quizzes/delete-quiz/${id}`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

const getAllCategories = async () => {
  try {
    const response = await getJSON("/categories");
    return response.data.categories;
  } catch (err) {
    throw new Error(err);
  }
}

const createNewCategory = async (data) => {
  try {
    const response = await postJSON("/categories", data);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export { getMyQuizzes, getQuizById, createNewQuiz, deleteQuiz, createNewCategory, getAllCategories };
